JavaScript Utility Functions

This project contains essential JavaScript utilities, including closures, object manipulation, and constructor functions.

Features

1. Factorial Function Using Closure

Uses closures to compute the factorial of a number efficiently.

Utilizes memoization to cache results and optimize performance.


2. First Character Uppercase Function

Checks if the first character of a string is uppercase.

If not, converts it to uppercase and returns the modified string.


3. Calculator Constructor Function

A constructor function that creates calculator objects with three methods:

read(): Prompts the user for two values and stores them.

sum(): Returns the sum of the stored values.

mul(): Returns the product of the stored values.


4. Deep Clone Function

Recursively clones an object, including properties, methods, and prototypes.

Ensures that all nested structures and functions are preserved.

Does not use built-in cloning methods like JSON.parse(JSON.stringify()) or structuredClone().