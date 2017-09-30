This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Description

This project is an article reader created in React.

## Development method

I chose to build it as I would if this were a real piece of code I was building for a production system. I intentionally broke down the Article Reader into as small components as I could.

I bootstrapped with Create React App just to get going quickly-- that being said, I'd probably do a heavier reworking of the webpack configuration and packages.json to make sure the project didn't have things configured that weren't necessary. Or I'd just install the node modules and build the configurations from scratch.

I added ESLint just to help keep the code looking clean as I built it. I also added SCSS support with sass-loader.

If I were to spend more time on this I'd abstract importing the Article data into an API Mock service, rather than importing the JSON directly. And add CSS Bem Linting to enforce CSS being styled per component with consistent naming conventions.

## Note about yarn

You should be able to use yarn interchangeably with npm to follow the instructions in the rest of this document.

## Installation Instructions

1. Install Node from http://nodejs.org
2. Clone this repository
2. Run ```npm i``` in the cloned repository folder

## Running Development Server

Run ```npm start``` to run the development server and see the code running in your browser.

You can access the article reader at http://localhost:3000

## Installing & Running Storybook

Storybook is an environment that allows you to develop UI components in isolation from the rest of the application.

To Install: ```npm i -g @storybook/cli```

To Run: ```npm run storybook```

You can access storybook at http://localhost:6006

## IDE Setup

I used Atom (http://atom.io) to build this. You can use whatever IDE you'd like, but there are a few packages you need to install into Atom to get it to behave correctly with ESLint:

1. language-javascript-jsx
2. linter-estlint. In the settings enable 'Fix Errors on Save'

You also need to run ```npm i``` on the repository for linting to work correctly if you haven't yet.

## Building Code

Run ```npm build``` to build the JS and CSS bundles into the dist folder.

## Testing

Run ```npm test``` to run test cases and show test coverage.
