import { BrowserRouter, Switch, Route } from "react-router-dom";

// components
import Login from "./auth/Login";
import Register from "./auth/Register";
import Home from "./Pages/Home";



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
