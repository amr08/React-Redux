# Zendesk Ticket Portal

------

## Task:

- A user should be able to add a ticket to Zendesk through the SPA.  Use Auth0 for user authentication, react/redux, and a server for submitting and receiving info.


## Getting Started

### Prerequisites

This application uses Node.js, NPM, & Webpack

### Installing and Running Locally

Set up accounts and tokens with Zendesk & Auth0

then install package.json:

    $ npm install

Compile JS
	
	$ webpack

Start server:

    $ node server.js

Open web browser and type ```localhost:3000```

Voila! 

## Tech
---
  - Node, Express, React, Webpack, Redux
  - JavaScript/jQuery
  - Front-End Framework: Auth0 Bootstrap
  - Dillinger for realtime README display

## Development Log
----

##### Tuesday 7/4/17 - Getting started!
  - Obtained assignment
  - Brainstormed plan for what goals I wanted to accomplish and thought about what problems I would run into
  - Started README to document the process
  - Created initial React app running on server

##### Wednesday 7/5/17 - Tough day at the office
  - Fought with react-router for far too long
  - Was able to trigger Auth0, but was unable to incorporate it without errors. Marked it all out!
  - Attempted redux, had trouble with various docs/versions 

##### Thursday 7/6/17 - Changed gears
  - Tackled the react-router/file issues
  - Posting and getting from Zendesk API!
  - Removed old styling and added Auth0 Bootstrap

##### Friday 7/7/17 - Functional app!

  - Moved app & server over to create-react-app and was able to get auth0 to work!

##### Saturday 7/8/17 - Preparing for the home stretch

  - Last step is to incorporate Redux. Luckily I saved myself plenty of time to tackle errors and challenges ahead. 
  - Today I spent time getting a clean workspace ready to go and opened all docs that I will need for the remaining days.

##### Sunday 7/9/17 - Redux Success!

  - I was able to send ticket submissions by utilizing redux
  - UI updates to enhance experience

##### Monday 7/10/17 - App Complete!

  - I was up quite early excited about finishing the app today. I was able to send data to store in one compoenent and render to html in another.  Technically, since it was a child component, it would have been easier just pass down state to props, but I wanted to demonstrate utilizing props from the global redux store.
  - After some expected slow downs with deployment due to that fiesty bundle.js and forgetting to add config vars to heroku, the app is deployed and live here! [https://zendeskreactredux](https://zendeskreactredux.herokuapp.com)


![](public/assets/zendeskgif3.gif)

### Summary of accomplishments

- Created an SPA with React/Node/Express/Redux utilzing the Zendesk API
- Utilized the global store instead of passing state between components
- Secured all routes
- Designed a simple UI that is user friendly
- Bonus: I've gotten really good at submitting tickets

### Next steps for Production 

- Further testing: There appears to be a bug where a ticket is sometimes duplicated, however, it's not easy to replicate this bug so I could not identify the source.
- Refactor rendering of global store data with best practices - I had to take my best guess at times! 
- Web Designer to review and give suggestions on how to improve UI


Thanks to the Auth0 team for the opportunity to create this app and for steering me in the right direction!




