// Date: Dec 20 2021
// Author: Xinwen Dong
//
// Introduction:
//
//    This react component renders the main part of web app.
//
// Component:
//
//    class Find {
//        constructor(props){}
//        setOrder(e){}
//        handleInputValue(){}
//        triggerButtonClick(e){}
//        render(){
//            ...
//            <ListResults/>
//        }
//    }
//

import React, { Component } from "react";
import ListResults from "./ListResults";
import sortPalinArr from "../common/sortPalinArr";
import findPalindrome from "../common/findPalindromes";
import { ASCEND, POSITION, LENGTH, SORTKEY } from "../common/constants";

export class Find extends Component {
  // initialize state for Find component with default values
  // this.state = {
  //    palindromes: null,    // an array to save all palindromic substrings, their positions and lengths
  //    hasPalindromes: true, // shows if the string has palindromes
  //    isFirst: true,        // check if it is the first time to render this component
  //    order: {
  //      sortKey: LENGTH,    // radio input value for primary sort key; default "length"
  //      length: ASCEND,     // sort order for length column; default "ascend"
  //      position: ASCEND,   // sort order for position column;; default "ascend"
  //    },
  //  };
  constructor(props) {
    super(props);
    this.state = {
      palindromes: null,
      hasPalindromes: true,
      isFirst: true,
      order: {
        sortKey: LENGTH,
        length: ASCEND,
        position: ASCEND,
      },
    };
  }

  // this.state.order has three properties, corresponding to 3 radio inputs
  // this.state.order = {
  //      sortKey: LENGTH,
  //      length: ASCEND,
  //      position: ASCEND,
  //    }
  setOrder = (e) => {
    if (e.target.name === SORTKEY) {
      this.setState((prevState) => {
        return {
          ...prevState,
          order: {
            ...prevState.order,
            sortKey: e.target.value,
          },
        };
      });
    } else if (e.target.name === LENGTH) {
      this.setState((prevState) => {
        return {
          ...prevState,
          order: {
            ...prevState.order,
            length: e.target.value,
          },
        };
      });
    } else if (e.target.name === POSITION) {
      this.setState((prevState) => {
        return {
          ...prevState,
          order: {
            ...prevState.order,
            position: e.target.value,
          },
        };
      });
    }
  };

  // call two external functions:
  // 1) findPalindrome() to find all palindromic substrings
  // 2) sortPalinArr() to sort these substrings
  handleInputValue = () => {
    const { order } = this.state;
    let { value } = this.inputFind;
    value = value.replace(/\s+/g, ""); // remove all white spaces
    this.setState({ isFirst: false });
    const palinArr = findPalindrome(value);

    // if there is no palindrome
    // only one palindrome
    // more than one palindrome (need to sort)
    if (palinArr.length === 0) {
      this.setState({ hasPalindromes: false });
    } else if (palinArr.length === 1) {
      this.setState({ hasPalindromes: true, palindromes: palinArr });
    } else {
      this.setState({
        hasPalindromes: true,
        palindromes: sortPalinArr(palinArr, order),
      });
    }
  };

  // user can press enter to trigger "find" button after entering the string
  triggerButtonClick = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      this.handleInputValue();
    }
  };

  render() {
    return (
      <main>
        <form
          className="enter-string"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label htmlFor="palindrome">Enter a string:</label>
          <input
            type="text"
            id="palindrome"
            placeholder="Enter a string"
            ref={(c) => (this.inputFind = c)}
            onKeyUp={this.triggerButtonClick}
            required
            minLength="2"
          />

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
                <label htmlFor="position-key">
                  {" "}
                  Primary sort key: Position
                </label>
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
        </form>
        {/* call the child component ListRecults and pass props to it */}
        <ListResults {...this.state} />
      </main>
    );
  }
}

export default Find;
