import { h } from "preact";
import { Router } from "preact-router";

import Header from "./header";
import register from "preact-custom-element";

const Greeting = ({ name = "World" }) => <p>Hello, {name}!</p>;

register(Greeting, "x-greeting", ["name"]);
// Code-splitting is automated for `routes` directory
import Home from "../routes/home";
import Profile from "../routes/profile";

const App = () => (
  <div id="app">
    <Header />
    <Router>
      <Home path="/" />
      <Profile path="/profile/" user="me" />
      <Profile path="/profile/:user" />
    </Router>
    <x-greeting name="Jane"></x-greeting>
  </div>
);

export default App;
