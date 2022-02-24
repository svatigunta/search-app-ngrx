import { BaseApiStatus } from "src/app/models/base-api.model";
import { Character } from "src/app/models/character-api.model";

export interface CharactersState {
  characters: Character[];
  apiStatus: BaseApiStatus;
}

export const charactersInitialState: CharactersState = {
  characters: [],
  apiStatus: BaseApiStatus.Inactive
}
