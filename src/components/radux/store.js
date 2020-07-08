import { createStore } from "redux";

import { persistStore, persistReducer } from "redux-persist"; /* save to localSTORE */
import { devToolsEnhancer } from "redux-devtools-extension";  /* save to localSTORE */
import storage from "redux-persist/lib/storage";              /* save to localSTORE */ 
import rootReduser from "./rootReduser";

// const reducer = (state = {sss: [1]}, action) => state;
const persistConfig = {
  key: "root",
  storage,
};

export const persistedReducer = persistReducer(persistConfig, rootReduser); /* save to localSTORE */

export const store = createStore(persistedReducer, devToolsEnhancer());      /* save to localSTORE */
export const persistor = persistStore(store);                               /* save to localSTORE */


// export const store = createStore(rootReduser);
