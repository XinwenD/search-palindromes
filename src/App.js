import React, { Component } from "react";
import Header from "./components/Header";
import Find from "./components/Find";
import ListResults from "./components/ListResults";
import About from "./components/About";
import Footer from "./components/Footer";

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Find />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;
