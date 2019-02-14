# JavascriptAlgorithms

A repository dedicated to solutions based around common interviewing problems. Our goal is to implement different solutions for algorithm and data structure based problems. 

## Contribution Guidelines

The primary purpose of this repository foster educated learning around Javascript interview questions. Making the solutions faster and more efficient is the main goal of this repository. We are grateful for any contributions to the code that will provide new questions, and more efficient solutions. Read below to learn how you help improve this repository while following a few fidelines.

### Contributing Guide
Read our contributing guide to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes.


 - Install all dependencies

npm install

 - Run ESLint. Run the application to check code quality.

npm run lint

 - Run all tests

npm test

 - Run tests by name

ex. npm test -- 'LinkedList'

Playground

You may play with data-structures and algorithms in ./src/playground/playground.js file and write tests for it in ./src/playground/__test__/playground.test.js.

Then just simply run the following command to test if your playground code works as expected:

npm test -- 'playground'
 
 - You have gcc installed or are comfortable installing a compiler if needed. Some of our dependencies may require a compilation step. On OS X, the Xcode Command Line Tools will cover this. On Ubuntu, apt-get install build-essential will install the required packages. Similar commands should work on other Linux distros. Windows will require some additional steps, look into  node-gyp documentation
 
 - You are familiar with Git.

- You should first open up an issue providing details on what bug fix you wish to implement. After reviewing the details the bug fix or faster solution, we will communicate with you to submit a pull request with your implementation. If there is no test written, please make sure to also submit a test that passes your solution. 
