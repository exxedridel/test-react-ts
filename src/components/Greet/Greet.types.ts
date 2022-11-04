export type GreetProps = {
   name?: string
 }

// comments about line 24 within package.json file about 
// to run command: $ npm run coverage 
// single "--" is the way to pass arguments to npm unlike yarn that doesn't requires it
// first "--collectCoverageFrom" is to only apply test to certain folder
// second "--collectCoverageFrom" is to exclude types, stories, constants, test and spec files that will not require test