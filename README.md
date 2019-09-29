# Anonymous Team Feedback  [![Build Status](https://travis-ci.org/labseu2-anonymous-team-feedback/FE.svg?branch=master)](https://travis-ci.org/labseu2-anonymous-team-feedback/FE)
[![Coverage Status](https://coveralls.io/repos/github/labseu2-anonymous-team-feedback/FE/badge.svg?branch=master)](https://coveralls.io/github/labseu2-anonymous-team-feedback/FE?branch=master)
[![](https://img.shields.io/badge/Protected_by-Hound-a873d1.svg)](https://houndci.com)

Welcome to the client app repo



```
Link to staging environment: https://staging-atf.herokuapp.com/
```

```
Link to production environment: https://anonymous-team-feeedback.herokuapp.com/
```


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
    - [GraphQL](#graphql)
    - [React Apollo](#react-apollo)
    - [Dotenv](#dotenv)
    - [Styled-Components](#styled-components)
    - [React Router](#react-router)
    - [JWT-Decode](#jwt-decode)
    - [Query-String](#query-string)
    - [Coveralls](#coveralls)
    - [Enzyme](#enzyme)
    - [Prop-Types](#prop-types)
    - [React-Toastify](#react-toastify)
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

### GraphQL
GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools. | [View Dependency](https://graphql.org/)

### React Apollo
React Apollo allows you to fetch data from your GraphQL server and use it in building complex and reactive UIs using the React framework. React Apollo may be used in any context that React may be used. In the browser, in React Native, or in Node.js when you want to do server-side rendering. | [View Dependency](https://apollographql.com)
### dotenv

Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology. | [View Dependency](https://www.npmjs.com/package/dotenv)

### Styled Components

Has a thriving community and offers the ability to directly style multiple components within a file. The syntax used is familiar to JavaScript and improves code cleanliness and makes it easy to get up and going for those without a lot of css experience. Styled components are also very efficient, improving load time for users. | [View Dependency](https://www.styled-components.com/docs/)

### React Router
Declarative routing for React. Helps in the Routing of our application.
 | [View Dependency](https://reacttraining.com/react-router/web/guides/quick-start)

### JWT-Decode

Jwt-decode is a small browser library that helps decoding JWTs token which are Base64Url encoded.  This library doesn't validate the token, any well formed JWT can be decoded. | [View Dependency](https://www.npmjs.com/package/jwt-decode)

### Query-String

The query-string package helps in objectifying the query parameters in our react application. | [View Dependency](https://www.npmjs.com/package/query-string)

### Coveralls

Shows which parts of code aren't covered by the test suite | [View Dependency](https://docs.coveralls.io/)

### Enzyme

The query-string package helps in objectifying the query parameters in our react application. | [View Dependency](https://airbnb.io/enzyme/docs/api/)

### Prop-Types

Allows declaration of types for React Props. | [View Dependency](https://reactjs.org/docs/typechecking-with-proptypes.html)

### React-Toastify

 React-Toastify allow you to add notification to your app with ease. | [View Dependency](https://github.com/fkhadra/react-toastify)
 

## Front-End Dependencies `(Development)`

### Eslint
Eslint is the dominant linting tool for NodeJS and it makes it possible to establish a clear coding convention for a team or project, as well as aiding in catching various bugs such as variables improperly scoped. | [View Dependency](https://eslint.org/)



