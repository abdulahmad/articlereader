This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Description

This project is an article reader created in React.

## Development Notes

I chose to build it as I would if this were a real piece of code I was building for a production system. I intentionally broke down the Article Reader into as small components as I could.

As mentioned I bootstrapped it with ```create-react-app```. Everything from ```src/App.jsx``` and below is not boilerplate and pretty much 100% my code. This includes everything in ```src/components```.

I added ESLint just to help keep the code looking clean as I built it. I also added SCSS support with sass-loader.

I didn't include a CSS framework because in the modern era of flexbox and CSS Grid it's not really necessary. There are some compromises that have to be made due to CSS Grid still being fairly new and a few browsers that are still in use don't fully support it, but in that case the goal would be to serve up the mobile version of the website. Also, this site was very simple and didn't require any changing of the way the page displayed between mobile and desktop.

If you want to flip between the Adam Sandler article and the Changing Rooms article, go into ```src/App.jsx``` and you should be able to flip between the two data sets near the top of the file by commenting out one line and uncommenting the other line.

If I were to spend more time on this I'd abstract importing the Article data into an API Mock service, rather than importing the JSON directly. And add CSS BEM Linting to enforce CSS being styled per component with consistent naming conventions. I'd also create some sort of global SCSS structure for common variables (breakpoints, etc) and theming.

I bootstrapped with Create React App just to get going quickly-- that being said, I'd probably do a heavier reworking of the webpack configuration and packages.json to make sure the project didn't have things configured that weren't necessary. Or I'd just install the node modules and build the configurations from scratch. There probably is some bloat to the JS/CSS bundle sizes because I didn't optimize these aspects.

The progress bar was built the way I would do it if I was asked to do it at a real job-- with an npm package that can already do the task. I may have been a bit more careful in checking that the package I included was as lean as possible though. You should be able to see the progress bar in Storybook (look below for instructions to run storybook). That being said I think there are better progress bars out there, but just in a pinch picked the first one that I could easily get working.

I took the balance of Saturday to build this project out. If I had more time (and I don't-- busy on Sunday) I would make sure the test cases were working and do clean up and ensure the bundle is as small as possible.

Commenting in the code is light-- partially because of time constraints, but also because many of the components are pretty light and simple to look at and understand how they work.

I will also note that I'm not usually doing design like I did for this project-- it's something I might have had to do in a pinch here and there in some previous roles, but I'm usually basing my work on mocks from actual designers and making sure I nail the design to a T. Or even if there aren't mocks for a specific feature, there's enough of a look & feel to the site that I can extrapolate. But I do feel that technically, the structure of the code is very sound, and it would be pretty easy for someone who hasn't looked at this code base to understand and make their own changes to it.

## Note on hardcoded protocol

I normally wouldn't do this, but for the purposes of this project I forced ```http://``` into the URLs so that I could also distribute a version of this that runs locally on your hard drive without having to start a webserver. This was in case you would like to run this without going through all of the steps to set up node and the repository on your machine. You should be able to open ```build/index.html``` from the cloned repo in your browser directly and see this application working (I had to make a slight path modification-- if you run the build script, index.html will not work directly in the browser anymore). But I'd highly recommend both using the dev server version and looking at the components in Storybook.

## Note about yarn

You should be able to use ```yarn``` interchangeably with ```npm``` to follow the instructions in the rest of this document.

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

Run ```npm run build``` to build the JS and CSS bundles into the build folder.

## Testing

Run ```npm test``` to run test cases and show test coverage.

NOTE: Test Cases have not been worked on and the default one fails because there are some UI specific packages that have to be conditionally disabled if running in test mode. I can do this, but it would take more than I have this weekend :)

## Code Structure

### Important Files & folders:

```build``` - where the production build gets outputted

```config``` - webpack, jest and env config

```src``` - code for article reader lives here

```src\components``` - code for every component within article reader

```src\data``` - mock data from API calls

```src\App.jsx``` - top level component

```stories``` - where storybook stories are defined

### Component Descriptions:

```Author``` - Displays author name

```CaptionedImage``` - Displays a captioned image

```Content``` - Takes in a content slot from the page and then renders the appropriate content component

```ContntAd``` - Content slot for Ad Placeholder

```ContentImage``` - Content slot for Image

```ContentTextBlock``` - Content slot for Text Block

```ContntVideoEmbed``` - Content slot for Video Embed

```HtmlHead``` - Sets the headers for the page. This is where the meta tags for social media sharing are set

```NextArticle``` - Displays information for the Next Article

```Page``` - Main Layout and Global state for the article reader

```Pagination``` - Displays and can change current page

```ProgressBar``` - Progress Bar (unused in article but can be seen in storybook)

```Title``` - H1 Title for article
