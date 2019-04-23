# Salp

A simple, intuitive chart-making application that uses Chart.js. Using Salp, you can:

+ input data manually or by uploading a CSV;
+ turn that data into a line, bar or pie chart;
+ customize the chart's presentation;
+ save and edit charts;
+ generate an iframe of a chart to embed on your site.

## Live

Use Salp live [here](https://salp-client.herokuapp.com/login) (currently only compatible with Chrome and Firefox).

## Demo

See [here](https://www.youtube.com/watch?v=1zRdEr1ctiY) for a video demo.

## Installation
### Frontend

This repository contains Salp's frontend. To install it locally, run the following in the terminal (in your desired directory):

+ `$ git clone git@github.com:davidfloyd91/Salp.git`
+ `$ cd Salp`

To run the app locally, it's necessary to make a minor change to the code:

+ in `src/helpers.js`, comment out line 1 (`export const url = 'https://salp-api.herokuapp.com';`) and comment in line 2 (`export const url = 'http://localhost:3000';`)

Then run:

+ `$ npm i`
+ `$ npm run local_start`

Then visit `localhost:3001` in the browser.

### Backend

The backend lives at [this repo](https://github.com/davidfloyd91/Salp-Backend). To install it, run the following in the terminal (in your desired directory):

+ `$ git clone git@github.com:davidfloyd91/Salp-Backend.git`
+ `$ cd Salp-Backend`

To run the app locally, it's necessary to make a few minor changes to the code:

+ in `app/controllers/application_controller.rb`, comment out line 8 (`JWT.decode(auth_headers, ENV['AUTH_SECRET'])`) and comment in line 7 (`JWT.decode(auth_headers, 'unsafe_secret_replacement')`)
+ do the same with lines 13 and 14 (this replaces the secret key necessary to encode and decode JWT tokens with an unsafe string, enabling you to log in or sign up -- unsafely)
+ in `config/initializers/cors.rb`, comment out line 10 (`origins 'https://salp-client.herokuapp.com'`) and comment in line 11 (`origins 'http://localhost:3001'`)

Then run:

+ `$ bundle` (you may need to install Ruby 2.6.1)
+ `$ rails s`

The database will run at `localhost:3000`. It is configured to run Postgres.

## Known bugs

After saving a chart, the data for that chart will sometimes appear in the manual input fields for a new chart. These data do not affect the actual chart's display, which treats the fields as blank, and they can simply be overwritten.

## What's a salp?

[These](http://planktonchronicles.org/en/episode/salps-exploding-populations/) are salps.

## License

Salp is licensed under the MIT License.

Copyright 2019 David Floyd.
