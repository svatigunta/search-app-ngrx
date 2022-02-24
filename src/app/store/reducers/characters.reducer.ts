import { Action, createReducer, on } from "@ngrx/store";
import { charactersInitialState, CharactersState } from "../models/characters-state";
import * as CharactersActions from '../actions/characters.actions';
import { BaseApiStatus } from "src/app/models/base-api.model";

const reducer = createReducer(
  charactersInitialState,
  on(CharactersActions.getAllCharactersRequest, state => ({ ...state, apiStatus: BaseApiStatus.Loading })),
  on(CharactersActions.getAllCharactersRequestFail, state => ({ ...state, apiStatus: BaseApiStatus.Failure })),
  on(CharactersActions.getAllCharactersRequestSuccess, (state, { characters }) => ({
    ...state,
    characters,
    apiStatus: BaseApiStatus.Success
  })),
);

export const charactersReducer = (state: CharactersState | undefined, action: Action) => reducer(state, action);
