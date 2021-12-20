// Date: Dec 20 2021
// Author: Xinwen Dong
//
// Introduction:
//
//    This App component renders the main body of this web app.
//
// Component tree:
//
//    class App {
//        render(){
//            <Header />
//            <Find />
//                <ListResults /> // child of Find component
//            <About />
//            <Footer />
//    }
//

import React, { Component } from "react";
import Header from "./components/Header";
import Find from "./components/Find";
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
