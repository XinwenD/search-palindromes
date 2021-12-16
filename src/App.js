import React, { Component } from "react";
import Header from "./components/Header";
import FindPalindrome from "./components/FindPalindrome";
import Footer from "./components/Footer";

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <FindPalindrome />
        <Footer />
      </div>
    );
  }
}

export default App;
