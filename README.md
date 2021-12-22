# Search Palindromic Substrings

This web app lists all palindromic substrings and sort them according to their lengths or starting positions.

- Language: JavaScript
- Framework: React
- Test: Jest
- Build: Webpack

Author: Xinwen Dong

Date: Dec 21, 2021

## Summary

A palindrome is a string that reads the same when reversed, e.g., “madam". One-character strings are
not palindromes.

In this app, you can enter a string in the "Enter a string" input field. By selecting:

- Primary sort key: length/position
- Length order: ascending/descending
- Position order: ascending/descending

One can see all palindromic substrings in a tabular list.

Let's take the string "@@$$$$@@LOLLOL" as an example, by setting primary sort key as length, sort by ascending order in both length and position, we will get all palindromic substrings as shown below:

| Palindrome | Length | Position |
| ---------- | ------ | -------- |
| @@         | 2      | 0        |
| $$         | 2      | 2        |
| $$         | 2      | 3        |
| $$         | 2      | 4        |
| @@         | 2      | 6        |
| LL         | 2      | 10       |
| $$$        | 3      | 2        |
| $$$        | 3      | 3        |
| LOL        | 3      | 8        |
| LOL        | 3      | 11       |
| $$$$       | 4      | 2        |
| OLLO       | 4      | 9        |
| @$$$$@     | 6      | 1        |
| LOLLOL     | 6      | 8        |
| @@$$$$@@   | 8      | 0        |

In the project directory, you can run: `npm install` to install dependencies.

You can run `npm start` to start the React app. Run `npx jest --coverage` to check the unit test and coverage report.

### Time/Space complexity

For the core functions:

- `searchPalindromes.js`

  - Time complexity:

    - `O(n)` for enumerating all possible palindromic center
    - `O(n)` for extending two pointers
    - The total time complexity is `O(n^2)`

  - Space complexity: The output is an array containing all results -- space complexity is `O(n)`

- `quickSort.js`

  - Time complexity: `O(nlogn)`
  - Space complexity: The output is a new array containing all results -- space complexity is `O(n)`

- `sortPalinArr.js`

  - Time complexity: `O(nlogn)`
  - Space complexity: The output is an array containing all results -- space complexity is `O(n)`

## Assumptions

This app neglects all white spaces. After trimming all white spaces, the length input string should at least be greater than or equal to 2. Validation of this is conducted at front end component `Search.jsx`.

This app is also case sensitive, which means no case conversion. If we compare `"Q"` with `"q"`, it should be falsy.

## File structure

```
// project file tree

📦/                         // Project root folder
 ┣ 📂public
 ┣ 📂src
 ┣ 📂test
 ┣ 📜.babelrc               // babel config for JavaScript syntax version management
 ┣ 📜.gitignore
 ┣ 📜.package-lock.json
 ┣ 📜.package.json
 ┣ 📜README.md
 ┗ 📜webpack.config.js      // config for building app
```

```
// tree of "/src"

📦src
┣ 📂common           // includes scripts that searches the palindromic substrings and sort those strings.
┃ ┣ 📜constants.js           // define frequently used constants
┃ ┣ 📜quickSort.js           // quick sort an array
┃ ┣ 📜searchPalindromes.js   // script to look for palindromic substrings
┃ ┗ 📜sortPalinArr.js        // sort the palindromic array; powered by quick sort
┣ 📂components       // React app components to render the webpage
┃ ┣ 📜About.jsx
┃ ┣ 📜Footer.jsx
┃ ┣ 📜Header.jsx
┃ ┣ 📜ListResults.jsx
┃ ┗ 📜Search.jsx
┣ 📂css              // CSS style
┃ ┣ 📜index.css
┃ ┣ 📜index.less
┃ ┣ 📜normalize.css         // normalize the default webpage style
┃ ┗ 📜reset.css             // reset the default webpage style
┣ 📜App.js           // React App (top level) component
┗ 📜index.js         // React App entry file
```

```
// tree of "/test"

📦test
┣ 📜searchPalindromes.test.js    // test the method of looking for palindromic substrings
┗ 📜sortPalinArr.test.js         // test the sort method

// tree of "/public"

📦public
┣ 📜favicon.ico     // React app logo
┗ 📜index.html      // React app entry root html
```

## Unit Tests & Test Strategy

### Test Results

The test focuses on testing `searchPalindromes.js` and `sortPalinArr.js`. Test coverage is 100%. 14 tests passed out of 14 total tests.

PASS test/searchPalindromes.test.js
PASS test/sortPalinArr.test.js
--------------------|---------|----------|---------|---------|-------------------
File | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
--------------------|---------|----------|---------|---------|-------------------
All files | 100 | 100 | 100 | 100 |
constants.js | 100 | 100 | 100 | 100 |
searchPalindromes.js | 100 | 100 | 100 | 100 |
quickSort.js | 100 | 100 | 100 | 100 |
sortPalinArr.js | 100 | 100 | 100 | 100 |
--------------------|---------|----------|---------|---------|-------------------

Test Suites: 2 passed, 2 total
Tests: 14 passed, 14 total
Snapshots: 0 total
Time: 1.518 s, estimated 2 s
Ran all test suites.

### Test Strategy

#### searchPalindromes.js

- Test the example case
- Test string with a length less than 2

#### sortPalinArr.js

- Test the example case: `"ABCBAHELLOHOWRACECARAREYOUILOVEUEVOLIIAMAIDOINGGOOD"`

  - Test "length" or "position" as the main sort key
  - Test "ascend" or "descend" order for the sort key
  - 8 scenarios in total

- Test a random case: `"aaaabbbbccccMadamLolLoL"`

  - To test whether sorting by length works well within groups of substings with the same starting "position"
  - 4 scenarios in total.

## Future Work

- Test more features and scenarios of the core functions
- Test React components
- Use more time complexity efficient algorithm in searching palindromes
- Try and test other sort methods
