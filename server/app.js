/**
 * Copyright 2016, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// [START app]
'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const Buffer = require('safe-buffer').Buffer;
const process = require('process'); // Required for mocking environment variables
const qs = require('querystring')
function getModel () {
  return require(`./model-${require('./config').get('DATA_BACKEND')}`);
}

// By default, the client will authenticate using the service account file
// specified by the GOOGLE_APPLICATION_CREDENTIALS environment variable and use
// the project specified by the GOOGLE_CLOUD_PROJECT environment variable. See
// https://github.com/GoogleCloudPlatform/google-cloud-node/blob/master/docs/authentication.md
// These environment variables are set automatically on Google App Engine
const PubSub = require('@google-cloud/pubsub');

// Instantiate a pubsub client
const pubsub = PubSub();

const app = express();
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

const formBodyParser = bodyParser.urlencoded({ extended: false });
const jsonBodyParser = bodyParser.json();

// List of all messages received by this instance
const messages = [];

// The following environment variables are set by app.yaml when running on GAE,
// but will need to be manually set when running locally.
const PUBSUB_VERIFICATION_TOKEN = process.env.PUBSUB_VERIFICATION_TOKEN;

const topic = pubsub.topic(process.env.PUBSUB_TOPIC);
const publisher = topic.publisher();

// [START index]
app.get('/', (req, res) => {
  res.render('map.html');
});

app.post('/', formBodyParser, (req, res, next) => {
  if (!req.body.payload) {
    res.status(400).send('Missing payload');
    return;
  }

  publisher.publish(Buffer.from(req.body.payload), (err) => {
    if (err) {
      next(err);
      return;
    }
    res.status(200).send('Message sent');
  });
});
// [END index]

// [START push]
app.post('/pubsub/push', jsonBodyParser, (req, res) => {
  if (req.query.token !== PUBSUB_VERIFICATION_TOKEN) {
    res.status(400).send();
    return;
  }

  // The message is a unicode string encoded in base64.
  const message = Buffer.from(req.body.message.data, 'base64').toString('utf-8');

  //messages.push(message);
  var data = qs.parse(message);
  data.timestamp = new Date().getTime();
  console.log(data);
  
  getModel().create(data, (err, entity) => {
    if (err) {
      next(err);
      return;
    }

    res.json(entity);
  });

  //res.status(200).send();
});
// [END push]

app.get('/data', jsonBodyParser, (req, res) => {
  getModel().list(1, (err, entities, cursor) => {
    if (err) {
      next(err);
      console.log(err);
      return;
    }
    else
    {
      if(entities.length > 0)
      {
        res.json(entities[0]);
      }
      else res.status(200).send();
    }
  });
});



// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
// [END app]

module.exports = app;
