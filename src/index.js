import { h, render } from "preact";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";
import "./style/common.scss";
import "./core/setRem";
export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

/**
 * 初始化项目
 */
function init() {
  let App = require("./components/App").default;
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
}

init()