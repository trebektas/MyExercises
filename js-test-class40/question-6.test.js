/**
 * This question is all about writing tests so the roles are reversed! We have provided a function and it is up to you to write the tests.
 * The function comment gives you an idea of what the function expects and what it should return.
 */

/**
 * This function takes an array of primitive values (strings, numbers, etc) and counts the number of times the second element is in the array.
 *
 * P.S. yes, this is pretty much the some function, but it is for testing purposes!
 *
 * DO NOT EDIT THE FUNCTION, YOU ONLY WRITE THE TESTS
 */
const countElements = (arr = [], element) => {
  if (!Array.isArray(arr)) {
    return 0;
  }

  let counter = 0;

  arr.forEach((item) => {
    if (item === element) {
      counter = counter + 1;
    }
  });

  return counter;
};

/**
 * TEST CODE: ONLY EDIT THIS
 * We've provided some syntax for you but feel free to change it to your liking! It should follow jest syntax though!
 *
 * To run the test make sure you have done an `npm install` command in your terminal and then run `npm t` or `npm run test`
 */
const testArray = ["hack",2,"your",2,"future",2,3,"future"];
const testFunctionForStringFuture = countElements(testArray, "future");
const testFunctionForNumberTwo = countElements(testArray, 2);
describe("countElements", () => {
  it("counts the number of times the sample string element", () => {
    expect(testFunctionForStringFuture).toBe(2);
  });
  it("counts the number of times the sample number element", () => {
    expect(testFunctionForNumberTwo).toBe(3);
  });
});
