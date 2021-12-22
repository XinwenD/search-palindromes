// Date: Dec 20 2021
// Author: Xinwen Dong
//
// Introduction:
//
//    This react component renders the About of web app
//
// Component:
//
//    class About {
//        render(){
//        }
//    }
//

import React, { Component } from "react";

export class About extends Component {
  render() {
    return (
      <section className="about-section">
        <h1>About the App</h1>
        <div className="link-github">
          <a
            href="https://github.com/XinwenD/search-palindromes"
            target="_blank"
          >
            <span>View source code on Github</span>
          </a>
          <p>Check out for more infromation in README.md</p>
        </div>
        <article className="summary">
          <ul>
            <li>
              <span>-</span> Language: JavaScript
            </li>
            <li>
              <span>-</span> Framework: React
            </li>
            <li>
              <span>-</span> Test: Jest
            </li>
            <li>
              <span>-</span> Build: Webpack
            </li>
          </ul>
        </article>
        <article className="introduction">
          <p>There are two core algorithms: </p>
          <p>
            (1) Looping over palindromic center method to check palindromic
            substrings
          </p>
          <p>(2) Quick sort to sort the substrings</p>{" "}
        </article>
      </section>
    );
  }
}

export default About;
