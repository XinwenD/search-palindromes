// Date: Dec 20 2021
// Author: Xinwen Dong
//
// Introduction:
//
//    This react component renders the header of web app
//
// Component:
//
//    class Header {
//        render(){
//        }
//    }
//

import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <header className="header">
        <h2>Search Palindromes</h2>
        <div>
          <p>
            This app searches all palindromes in a given string with following
            requirements
          </p>
          <ul>
            <li>
              <span>-</span> Print out all palindromes.
            </li>
            <li>
              <span>-</span> Show their starting position.
            </li>
            <li>
              <span>-</span> Show their length.
            </li>
            <li>
              <span>-</span> Sorted by their length/position.
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
