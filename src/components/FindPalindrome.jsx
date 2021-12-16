import React, { Component } from "react";
import quickSortPalinArr from "./quickSortPalinArr";
import { ASCEND } from "./constants";

export class FindPalindrome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      palindromes: null,
      isFirst: true,
      order: ASCEND,
    };
  }

  setOrder = (e) => {
    this.setState({ order: e.target.value });
  };

  handleInputValue = () => {
    let { value } = this.inputFind;
    value = value.replace(/\s+/g, "");
    this.setState({ isFirst: false });
    this.findPalindrome(value);
  };

  triggerButtonClick = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      this.handleInputValue();
    }
  };

  findPalindrome = (str) => {
    const { order } = this.state;
    const size = str.length;
    const palinArr = [];
    let count = 0;
    for (let i = 0; i < 2 * size - 1; i++) {
      let left = Math.floor(i / 2);
      let right = Math.floor(i / 2) + (i % 2);
      while (
        left >= 0 &&
        right < size &&
        str.charAt(left) === str.charAt(right)
      ) {
        if (left !== right) {
          palinArr[count] = {
            palin: str.slice(left, right + 1),
            position: left,
            length: right - left + 1,
          };
          count++;
        }
        left--;
        right++;
      }
    }
    quickSortPalinArr(palinArr, 0, palinArr.length - 1, order);
    this.setState({ palindromes: palinArr });
  };

  listPalindrome = () => {
    const { palindromes, isFirst } = this.state;
    return (
      <div className="list-area">
        {isFirst ? (
          <h2>Enter a string to check all palindromes</h2>
        ) : (
          palindromes.map((palindrome, index) => {
            return (
              <ul key={index}>
                <li className="palindrome-substring">
                  Palindrome: {palindrome.palin}
                </li>
                <li className="position">Position: {palindrome.position}</li>
                <li className="length">Length: {palindrome.length}</li>
              </ul>
            );
          })
        )}
      </div>
    );
  };

  render() {
    return (
      <main>
        <div className="enter-string">
          <label htmlFor="palindrome">Enter a string:</label>
          <input
            type="text"
            id="palindrome"
            placeholder="Enter a string"
            ref={(c) => (this.inputFind = c)}
            onKeyUp={this.triggerButtonClick}
          />
        </div>

        <div onChange={(event) => this.setOrder(event)} className="sort-order">
          <div className="ascend-order">
            <input
              type="radio"
              name="order"
              id="ascend"
              value="ascend"
              defaultChecked
            />
            <label htmlFor="ascend"> Sort by ascending order in length</label>
          </div>
          <div className="descend-order">
            <input type="radio" name="order" id="descend" value="descend" />
            <label htmlFor="descend"> Sort by descending order in length</label>
          </div>
        </div>
        <button onClick={this.handleInputValue} id="find-button">
          Find
        </button>
        {this.listPalindrome()}
      </main>
    );
  }
}

export default FindPalindrome;
