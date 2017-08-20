# pangiia-api

The Pangiia API

* DEV URL: [__DEV_LINK__]
* LIVE URL: [__LIVE_LINK__]

[![Build Status](https://travis-ci.org/FrescoDev/pangiia-api.svg?branch=master)](https://travis-ci.org/FrescoDev/pangiia-api)

### Prerequisities

* node/npm
* nodemon
* heroku-cli

### Install and Run Locally

1. Clone the repo
2. Run: ```npm install``` to install project dependencies
3. Run: ```npm run build``` to transpile and build the application
4. Run: ```npm start``` to kickstart and run the server OR Run: ```npm start | bunyan``` to kickstart and run the server with prettyfied logging (*requires install of bunyan).
5. Run: ```npm run start:dev``` to kickstart the application using local environment stubs for development.

## Running the Tests

- ```npm run test```

## Testing the API

Test the API using [Postman](https://www.getpostman.com/collections/{id})

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/fd959ef457269b085be4)

## Request & Response Examples

### API Resources

  - [GET /server-status](#get-server-status)

### GET /server-status

Example: http:/{url}/server-status

Response body:

    {
        "id": "pangiia api",
        "status": "ok"
    }

Content-Type: application/json

  - [GET /event-feed](#get-event-feed)

### GET /event-feed

Example: http:/{url}/event-feed

Response body:

    {
        "data": {
            "events": [
                {
                    "scheduledTime": "09:30:00",
                    "scheduledDate": "2017-09-14",
                    "house": "Commons",
                    "chamber": "Main Chamber",
                    "title": "House of Commons Main Chamber - Oral questions",
                    "categories": [
                        "House of Commons",
                        "Main Chamber"
                    ],
                    "description": "Thursday 14 September 2017 - 9:30am\n \nDigital, Culture, Media and Sport (including Topical Questions)"
                }
            ]
        }
    }

Content-Type: application/json