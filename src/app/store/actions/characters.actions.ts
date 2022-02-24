import { createAction, props } from '@ngrx/store';
import { Character } from 'src/app/models/character-api.model';

export const getAllCharactersRequest = createAction(
  '[Characters Api] Get all characters request',
);

export const getAllCharactersRequestSuccess = createAction(
  '[Characters Api] Get all characters request success',
  props<{ characters: Character[] }>()
);

export const getAllCharactersRequestFail = createAction(
  '[Characters Api] Get all characters request fail',
);
