import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Movies from "./Components/movies";
import NotFound from "./Components/notFound";
import Customers from "./Components/customers";
import Rentals from "./Components/rentals";
import NavBar from "./Components/common/navbar";
import MovieForm from "./Components/movieForm";
import LoginForm from "./Components/loginForm";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
       <main className="container">
        <Switch>
          <Route path="/movies/:id" component={MovieForm}></Route>
          <Route path="/login" component={LoginForm}></Route>
          <Route path="/movies" component={Movies}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/rentals" component={Rentals}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
