import { ActionReducerMap, combineReducers } from "@ngrx/store";
import { applicationInitialState, ApplicationState } from "../models/application-state";
import { charactersReducer } from "./characters.reducer";

const applicationActionReducerMap:
  ActionReducerMap<ApplicationState> = {
  charactersState: charactersReducer
};

export const reducers = combineReducers(
  applicationActionReducerMap, applicationInitialState
)
