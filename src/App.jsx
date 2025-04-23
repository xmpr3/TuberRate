import React from "react";
import Header from "./components/Header";
import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import store from "./utils/store";
import Body from "./components/Body";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <div className="pt-14">
        <Outlet />
      </div>
    </Provider>
  );
}

export default App;
