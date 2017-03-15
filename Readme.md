# mehdify [![Build Status](https://travis-ci.org/vmelnychuk/Mehdify.svg?branch=master)](https://travis-ci.org/vmelnychuk/Mehdify)

mehdify is a simple test for software engineers.

Difficulty: **Medium**

## Scope
The scope of this test is to assess the candidate's basic knowledge of software engineering principles, their ability to learn, work in a team and follow instructions.

## Problem Definition
Implement a function `mehdify(x)` that takes an integer `x` and returns the next biggest integer `y` made up of the same digits. If no bigger number can be found, it should return `x`.

```
	mehdify(419) // should return 491
	mehdify(271) // should return 712
	mehdify(542) // should return 542
	mehdify(32142) // should return 32214
```

You can assume that `x` is a positive integer.

## Instructions
- Fork the repository using your own GitHub account.
- Give collaborator access to your interviewer(s) (using their email address).
- Run `npm install` on the root directory to install any dependencies.
- You may implement your solution in `main.js` in the `/src` folder.
- - Run the command `gulp` to minify, prepare your solution and run any tests. If not all tests are passed then your solution is not complete. If the tests are passed then your solution is returning the correct result; however you will also be assesed on the method.
- When you are satisfied, commit and push your changes and create a pull request and assign your interviewer.

## Prerequisites
The test does not require any prior knowledge of the problem definition, however basic knowledge of the JavaScript language is required.

## Important Notes
- Keep your code nice and tidy.
- No JavaScript frameworks are required (no jQuery, Angular, React...etc).
- Any files outside the /src folder do *not* need to be modified; including test files.
- Use suitable commit messages & [gitflow](http://nvie.com/posts/a-successful-git-branching-model/) (if necessary)
