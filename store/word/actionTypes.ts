import { Word } from "./models";

export const SEND_WORD = "SEND_WORD";
export const DELETE_WORD = "DELETE_WORD";

interface SendWordAction {
  type: typeof SEND_WORD;
  payload: Word;
}

interface DeleteWordAction {
  type: typeof DELETE_WORD;
  meta: {
    timestamp: number;
  };
}

export type WordActionTypes = SendWordAction | DeleteWordAction;
