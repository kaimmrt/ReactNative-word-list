import { Word } from "./models";
import { WordActionTypes, SEND_WORD, DELETE_WORD } from "./actionTypes";

export function sendWord(newWord: Word): WordActionTypes {
  return {
    type: SEND_WORD,
    payload: newWord,
  };
}
export function deleteWord(timestamp: number): WordActionTypes {
  return {
    type: DELETE_WORD,
    meta: {
      timestamp,
    },
  };
}
