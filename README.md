Promise-Based Utilities and Async Code Fixes

This project includes JavaScript utilities that includes Promises and asynchronous patterns to improve execution control and prevent common problems like callback hell and stack overflow.

Features

1. testNum Function

A function that takes a number as input and returns a Promise, resolving if the number is greater than 10 and rejecting otherwise.

2. makeAllCaps() and sortWords()

Two chainable Promise-based functions:

makeAllCaps() capitalizes all words in an array.

sortWords() sorts words alphabetically.

If the array contains non-string elements, it throws an error.


3. Non-Blocking Sleep Function

A Promise-based sleep function that executes a callback after a specified delay without blocking the call stack.

4. Sequential Loop Execution with Promises

A function that ensures numbers from 0 to 10 print sequentially at random intervals, preventing out-of-order execution.

5. Fix for Stack Overflow in Recursion

A recursive function that processes a long list asynchronously to avoid stack overflow issue.

6. Explanation and Fix for setTimeout Loop Issue

An analysis of why a common setTimeout loop prints the same number multiple times and a corrected version that properly prints values from 0 to 9.