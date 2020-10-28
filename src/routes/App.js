import { BrowserRouter, Switch, Route } from "react-router-dom";
//COMPONENTS
import Home from "../containers/Home";
//STYLE
import "normalize.css";
import "../assets/style/App.scss";
//Redux
import { Provider } from "react-redux";
import Store from "../redux/store";

function App() {
  const store = Store()
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
