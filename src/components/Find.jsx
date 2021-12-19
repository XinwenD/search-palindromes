import React, { Component } from "react";
import ListResults from "./ListResults";
import sortPalinArr from "../common/sortPalinArr";
import findPalindrome from "../common/findPalindromes";
import { ASCEND, POSITION, LENGTH, SORTKEY } from "../common/constants";

export class Find extends Component {
  constructor(props) {
    super(props);
    this.state = {
      palindromes: null,
      isFirst: true,
      order: {
        sortKey: LENGTH,
        length: ASCEND,
        position: ASCEND,
      },
    };
  }

  setOrder = (e) => {
    if (e.target.name === SORTKEY) {
      this.setState({ order: { sortKey: e.target.value } });
    } else if (e.target.name === POSITION) {
      this.setState({ order: { position: e.target.value } });
    } else if (e.target.name === LENGTH) {
      this.setState({ order: { length: e.target.value } });
    }
  };

  handleInputValue = () => {
    const { order } = this.state;
    let { value } = this.inputFind;
    value = value.replace(/\s+/g, "");
    this.setState({ isFirst: false });
    const palinArr = findPalindrome(value);
    this.setState({ palindromes: sortPalinArr(palinArr, order) });
  };

  triggerButtonClick = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      this.handleInputValue();
    }
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

        <div onChange={(event) => this.setOrder(event)}>
          <div className="sort-key">
            <div className="order-length-key">
              <input
                type="radio"
                name="sort-key"
                id="length-key"
                value="length"
                defaultChecked
              />
              <label htmlFor="length-key"> Primary sort key: Length</label>
            </div>
            <div className="order-position-key">
              <input
                type="radio"
                name="sort-key"
                id="position-key"
                value="position"
              />
              <label htmlFor="position-key"> Primary sort key: Position</label>
            </div>
          </div>
          <div className="length-sort-order">
            <div className="order-ascend">
              <input
                type="radio"
                name="length"
                id="length-ascend"
                value="ascend"
                defaultChecked
              />
              <label htmlFor="length-ascend"> Length: Ascending</label>
            </div>
            <div className="order-descend">
              <input
                type="radio"
                name="length"
                id="length-descend"
                value="descend"
              />
              <label htmlFor="length-descend"> Length: Descending</label>
            </div>
          </div>
          <div className="position-sort-order">
            <div className="order-ascend">
              <input
                type="radio"
                name="position"
                id="position-ascend"
                value="ascend"
                defaultChecked
              />
              <label htmlFor="position-ascend"> Position: Ascending</label>
            </div>
            <div className="order-descend">
              <input
                type="radio"
                name="position"
                id="position-descend"
                value="descend"
              />
              <label htmlFor="position-descend"> Position: Descending</label>
            </div>
          </div>
        </div>

        <button onClick={this.handleInputValue} id="find-button">
          Find
        </button>
        <ListResults {...this.state} />
      </main>
    );
  }
}

export default Find;
