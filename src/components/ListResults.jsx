// Date: Dec 20 2021
// Author: Xinwen Dong
//
// Introduction:
//
//    This react component renders the list of palindromic substrings
//
// Component:
//
//    class ListResults {
//        constructor(props){}
//        render(){
//        }
//    }
//

import React, { Component } from "react";

export class ListResults extends Component {
  // receive props from parent component Find
  constructor(props) {
    super(props);
  }

  render() {
    // destructuring from props
    const { palindromes, isFirst, hasPalindromes } = this.props;
    return (
      <section>
        <ul className="list-title">
          <li className="title-palindrome-substring">Palindrome</li>
          <li className="title-length">Length</li>
          <li className="title-position">Position</li>
        </ul>
        <div className="list-area">
          {isFirst ? (
            <h2>Enter a string to check all palindromes</h2>
          ) : hasPalindromes ? (
            palindromes.map((palindrome, index) => {
              return (
                <ul key={index}>
                  <li className="palindrome-substring">{palindrome.palin}</li>
                  <li className="length">{palindrome.length}</li>
                  <li className="position">{palindrome.position}</li>
                </ul>
              );
            })
          ) : (
            <h2>This string does not have palindromes, try another one :)</h2>
          )}
        </div>
      </section>
    );
  }
}

export default ListResults;
