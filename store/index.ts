import { combineReducers, createStore, applyMiddleware } from "redux";
import { WordReducer } from "./word/reducer";
import { createLogger } from "redux-logger";

const rootReducer = combineReducers({
  word: WordReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const middlewares = [createLogger({})];
  const middleWareEnhancer = applyMiddleware(...middlewares);
  const store = createStore(rootReducer, middleWareEnhancer);
  return store;
}
