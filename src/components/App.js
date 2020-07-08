import React from "react";
import { Switch, Route } from "react-router";
import Header from "./Header/Header";
import FormPage from "./pages/FormPage/FormPage";
import ToDoPage from "./pages/ToDoPage/ToDoPage";
import routes from "./roures/routres";

// import sytles from "./firstComponent.module.css";
// const {} = sytles;

export const App = () => {
  // console.log("storeAPP", store.getState());

  return (
    <>
      <Header />
      <Switch>
        <Route exact path={routes.TODO_PAGE} component={ToDoPage} />
        <Route path={routes.FORM_PAGE} component={FormPage} />
      </Switch>
    </>
  );
};
