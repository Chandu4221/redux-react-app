import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";

import Home from "./components/home";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div id="App">
          <Home />
        </div>
      </Provider>
    );
  }
}
export default App;
