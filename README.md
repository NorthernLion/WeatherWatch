## WeatherWatch

This is a solution to preliminary assignment for Reaktor's summer job.
Created using Node, Express, React, Redux MongoDb and Bootstrap.
Calendar was taken from react-datetime package.

Code for the backend is located in the root of the repository (because heroku is a bitch if this is not the case) and frontend in the folder weatherwatchfront.

Application can be found in heroku: https://north-weather-watch.herokuapp.com/

## Install

```
$ git clone https://github.com/NorthernLion/WeatherWatch.git
$ cd WeatherWatch
$ npm install
```

## Run

To start the application

```
$ npm start
```

or if you want to run application in some other port than default 3001

```
$ PORT=<port> node index.js
```

where you should replace `<port>` with wanted port number i.e. 3000.

React page will be running in the adress: http://localhost:port/
