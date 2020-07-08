import React from "react";
import ReactDOM from "react-dom";
import styles from "./styles.css";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { App } from "./components/App";

import { store, persistor } from "./components/radux/store";

/* save to localSTORE + {persistor}   from "./components/radux/store";*/
import { PersistGate } from "redux-persist/integration/react";
/* save to localSTORE */

// console.log("store", store.getState());
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      {/* save to localSTORE */}
      <PersistGate loading={null} persistor={persistor}>
        {/* save to localSTORE */}

        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>,

  document.getElementById("root")
);
