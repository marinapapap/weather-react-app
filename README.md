# Weather App

## The App

A full-stack application with a RESTful api, that takes a location from the user and provides the weather in that location.

## Project Goal

This application is a simple idea that I completed, as a solo project, shortly after the Makers bootcamp. It enabled me to consolidate a lot of my learnings from the course and provided a platform to do deeper research into concepts that I could make work, but couldn't confidently explain why it worked (e.g. async await).

## The Tech

- [React](https://react.dev/) as the frontend framework of choice.
- [Cypress](https://www.cypress.io/) for end-to-end testing and component testing, on the front-end.
- [Tailwind](https://tailwindcss.com) for styling.
- [Node.js](https://nodejs.org/en/about) as the backend environment.
- [Express](https://expressjs.com/) as the backend web application framework.
- [Jest](https://jestjs.io/) for backend testing.
- [Nodemon](https://nodemon.io/) to reload the server automatically.
- [Prettier](https://prettier.io) for code formatting.
- [PostMan](https://www.postman.com) for testing http requests.
- [MongoDB](https://www.mongodb.com/) as the database (installed for potential future features, but not yet used).

## Installation

To download and initialise the project (this guide assumes you have Node.js and npm installed already):

```js
$ git clone https://github.com/marinapapap/weather-react-app.git
$ cd weather-react-app
$ cd frontend
$ npm install
$ cd ..
$ cd server
$ npm install
```

Register and get an API key for [OpenWeather](https://openweathermap.org/api). Then, create a new .env file in the server folder:

```js
$ cd server
$ touch  .env
```

Copy the below code into the .env file and update:

```js
# .env

API_KEY = "add your API key here"
```

## Using the App

From the main project directory...

Start running the front-end server:

```js
$ cd frontend
$ npm run start
```

Open a new terminal and start running the back-end server:

```js
$ cd server
$ npm run start
```

Open http://localhost:3000 to view and use the Ecoliday app in your browser.

## Testing the App

From the main project directory...

### Front-end

```js
$ cd frontend
$ npm run test
```

### Back-end

```js
$ cd server
$ npm run test
```
