import React,{Component} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";


export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={ProductList}></Route>
            <Route
              path="/products/detail/:productId"
              component={ProductDetail}
            ></Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;