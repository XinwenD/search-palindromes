import React, { Component } from "react";

export class ListResults extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { palindromes, isFirst } = this.props;
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
          ) : (
            palindromes.map((palindrome, index) => {
              return (
                <ul key={index}>
                  <li className="palindrome-substring">{palindrome.palin}</li>
                  <li className="length">{palindrome.length}</li>
                  <li className="position">{palindrome.position}</li>
                </ul>
              );
            })
          )}
        </div>
      </section>
    );
  }
}

export default ListResults;
