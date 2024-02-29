import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.ts";

import ReactDOM from "react-dom";

const RootApp = () => {

  return (
    <React.StrictMode>
<Router>
<App />
</Router>
      

    </React.StrictMode>
  );
};

const AppWithRedux = () => (
  <Provider store={store}>
    <RootApp />
  </Provider>
);

ReactDOM.render(<AppWithRedux />, document.getElementById("root"));
