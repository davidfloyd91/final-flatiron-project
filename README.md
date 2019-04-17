# Salp

A simple, intuitive chart-making application that uses Chart.js. Using Salp, you can:

+ input data manually or by uploading a CSV;
+ turn that data into a line, bar or pie chart;
+ customize the chart's presentation;
+ save and edit charts;
+ generate an iframe of a chart to embed on your site.

## Demo

See [here](https://www.youtube.com/watch?v=1zRdEr1ctiY) for a video demo.

## Installation
### Frontend

This repository contains Salp's frontend. To install it, run the following in the terminal (in your desired directory):

+ `$ git clone git@github.com:davidfloyd91/Salp.git`
+ `$ cd Salp`
+ `$ npm i`
+ `$ npm start`

Then visit `localhost:3001` in the browser.

### Backend

The backend lives at [this repo](https://github.com/davidfloyd91/Salp-Backend). To install it, run the following in the terminal (in your desired directory):

+ `$ git clone git@github.com:davidfloyd91/Salp-Backend.git`
+ `$ cd Salp-Backend`
+ `$ bundle`
+ `$ rails s`

The database will run at `localhost:3000`. It is configured to run Postgres [todo].

#### IMPORTANT

Note that the secret key necessary to encode and decode JWT tokens is not included in this repository, which will break the following lines in `app/controllers/application_controller.rb` and prevent login or signup:

`JWT.encode(payload, Rails.application.credentials.auth_secret)`

and

`JWT.decode(auth_headers, Rails.application.credentials.auth_secret)`

You can either write a value for `auth_secret` into your credentials file (which is encrypted and can't be edited directly), or you can replace `Rails.application.credentials.auth_secret` in both lines with a random string (which is insecure and only suitable for futzing).

## Known bugs

After saving a chart, the data for that chart will sometimes appear in the manual input fields for a new chart. These data do not affect the actual chart's display, which treats the fields as blank, and they can simply be overwritten.

## License

Salp is licensed under the MIT License.

Copyright 2019 David Floyd.
