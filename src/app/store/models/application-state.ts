import { charactersInitialState, CharactersState } from "./characters-state";

export interface ApplicationState {
  charactersState: CharactersState
}

export const applicationInitialState: ApplicationState = {
  charactersState: charactersInitialState
}
