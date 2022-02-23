export interface Word {
  word: string;
  mean: string;
  color: string;
  type: string;
  timestamp: number;
}

export interface WordList {
  words: Word[];
}
