import { WordList } from "./models";
import { WordActionTypes, SEND_WORD, DELETE_WORD } from "./actionTypes";

const initialState: WordList = {
  words: [],
};

export function WordReducer(
  state = initialState,
  action: WordActionTypes
): WordList {
  switch (action.type) {
    case SEND_WORD:
      return {
        words: [...state.words, action.payload],
      };
    case DELETE_WORD:
      return {
        words: state.words.filter(
          (word) => word.timestamp !== action.meta.timestamp
        ),
      };
    default:
      return state;
  }
}
