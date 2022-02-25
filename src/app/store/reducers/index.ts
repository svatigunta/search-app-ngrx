import { ActionReducerMap } from '@ngrx/store';
import { ApplicationState } from '../models/application-state';
import { charactersReducer } from './characters.reducer';

export const reducers: ActionReducerMap<ApplicationState> = {
	charactersState: charactersReducer,
};
