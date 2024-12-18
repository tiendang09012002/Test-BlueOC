import { applyMiddleware, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import Reducers from "./reducer";
import { thunk } from "redux-thunk";
const persistConfig = {
  key: "redux-store",
  storage: storage,
};

const store = createStore(
  persistReducer(persistConfig, Reducers),
  applyMiddleware(thunk)
);

persistStore(store);

export default store;
