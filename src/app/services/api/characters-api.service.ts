import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from 'src/app/models/character-api.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {

  private charactersUrl = `${environment.apiBaseUrl}/characters`

  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.charactersUrl).pipe(characters => characters)
  }
}
