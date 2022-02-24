import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { CharactersApiService } from 'src/app/services/api/characters-api.service';
import * as CharacterActions from '../actions/characters.actions';

@Injectable()
export class CharactersEffects {

  loadCharacters$ = createEffect(() => this.actions$.pipe(
    ofType(CharacterActions.getAllCharactersRequest),
    mergeMap(() => this.charactersService.getAllCharacters()
      .pipe(
        map(characters => (CharacterActions.getAllCharactersRequestSuccess({ characters }))),
        catchError(() => of(CharacterActions.getAllCharactersRequestFail()))
      ))
  ));

  constructor(
    private actions$: Actions,
    private charactersService: CharactersApiService
  ) { }
}
