# FE
[![Build Status](https://travis-ci.org/labseu2-anonymous-team-feedback/FE.svg?branch=master)](https://travis-ci.org/labseu2-anonymous-team-feedback/FE)
[![Coverage Status](https://coveralls.io/repos/github/labseu2-anonymous-team-feedback/FE/badge.svg?branch=master)](https://coveralls.io/github/labseu2-anonymous-team-feedback/FE?branch=master)
[![](https://img.shields.io/badge/Protected_by-Hound-a873d1.svg)](https://houndci.com)



`Link to staging environment:`

<a href="">
 https://staging-atf.herokuapp.com/
</a>


`Link to production environment:`
<a href="">
 https://anonymous-team-feeedback.herokuapp.com/
 </a>



# Table of Contents

- [Discussion Board](#discussion-board-pine)
- [Team](#team)
- [Table of Contents](#table-of-contents)
- [Scripts](#scripts)
  - [Running](#running)
- [Environment Variables](#environment-variables)
- [Tech-Stack](#tech-stack)
  - [Back-End Dependencies `(Production)`](#front-end-dependencies-production)
    - [React](#react)
    - [Dotenv](#dotenv)
    - [Styled-Components](#styled-components)
  - [Front-End Dependencies `(Development)`](#front-end-dependencies-development)
    - [Eslint](#eslint-1)
    - [Eslint-Config-Prettier](#eslint-config-prettier)
    - [React-Testing-Library](#react-testing-library)

# Scripts

## Running

`npm start`: Runs only the front-end client.

`npm test`: Will run the tests for front-end

`npm run build`: Will create a build file for front-end

# Environment Variables

`URL`: The url of the hosted website

# Tech-Stack

## Front-End Dependencies `(Production)`

### React

React is the current industry standard that offers a lot of out of the box benefits. It is fast, efficient, and scalable. Due to the large community, finding solutions to potential problems and reference material is much easier, even for a potential dev without a lot of experience who would like to contribute to Main Course. | [View Dependency](https://reactjs.org/docs/getting-started.html)


### dotenv

Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology. | [View Dependency](https://www.npmjs.com/package/dotenv)

### Styled Components

Has a thriving community and offers the ability to directly style multiple components within a file. The syntax used is familiar to JavaScript and improves code cleanliness and makes it easy to get up and going for those without a lot of css experience. Styled components are also very efficient, improving load time for users. | [View Dependency](https://www.styled-components.com/docs/)

### Connected React Router

Allows for the ability to synchronize state with redux store through uni-directional data flow, time traveling, and dispatching of history methods. This makes for an incredibly useful tool when dealing with various stages of state and subsequent routing for a seamless and intuitive UI. | [View Dependency](https://www.npmjs.com/package/connected-react-router)

## Front-End Dependencies `(Development)`

### Eslint

[See Above Explanation](#eslint)



