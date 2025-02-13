import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";
import Accupuncture from "./components/pages/Accupuncture";
import ScrollToTop from "./components/ScrollToTop";
import Massage from "./components/pages/Massage";
import TcmHerbs from "./components/pages/TcmHerbs";
import Cupping from "./components/pages/Cupping";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/accupuncture" component={Accupuncture} />
          <Route path="/massage" component={Massage} />
          <Route path="/tcmHerbs" component={TcmHerbs} />
          <Route path="/cupping" component={Cupping} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
