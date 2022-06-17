# ebac-injection-test

# Automation Security Test with Jest

This is the repository for automation of security tests, developed to work with Jest.

## Table of Contents

1. [Goal](#goal)
2. [Project Structure](#project-structure)
3. [Tests](#tests)
4. [Initial Setup](#initial-setup)
5. [Run Tests](#run-tests)

## Goal

The goal of this repository is to be easy to understand focused on developing automated security tests for Web, using [Jest](https://www.jests.io/), a tool developed in JavaScript language that provides speed, ease and reliability in the tests.

## Project Structure

```
|--- resources
|--- test
|--- .env
|--- docker-compose.yml
|--- jest.config.json
|--- jsconfig.json
|--- package-lock.json
|--- package.json
```

## Tests

The tests were written using the JavaScript language with Jest.

## Run tests

### Initial Setup

1. Requires node. To install, execute `npm install node` or download [Node](https://nodejs.org/en/download/)
2. Run the command `npm install` to install dependencies
3. Run the command `docker-compose up -d` to initialize the database in Docker

### Run Tests

- Run one of the commands below to run the tests.
  Examples:
- To run all tests, execute `npm run test`
<p>
