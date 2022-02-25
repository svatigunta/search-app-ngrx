import { createSelector } from '@ngrx/store';
import { ApplicationState } from '../models/application-state';
import { CharactersState } from '../models/characters-state';

export const getCharactersState = (state: ApplicationState) =>
	state.charactersState;

export const getCharacters = createSelector(
	getCharactersState,
	(state: CharactersState) => state?.characters
);
