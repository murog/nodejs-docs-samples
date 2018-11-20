/**
 * Copyright 2017, Google, Inc.
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

'use strict';

// [START kms_quickstart]
// TODO: googleapis doesn't have kms v2
// const {google} = require('googleapis');

// Imports the Google APIs client library
const kms = require('@google-cloud/kms');

// Creates a client
const client = new kms.KeyManagementServiceClient();

// Your Google Cloud Platform project ID
const projectId = process.env.GCLOUD_PROJECT;

// Lists keys in the "global" location.
const location = 'global';

// The resource name of the key rings.
var formattedParent = client.locationPath(projectId, location);

// Builds the request
const request = { parent: formattedParent }

// Queries the API
client.listKeyRings(request).then(result => {
  // Iterates through and prints results
  const keyRings = result[0] || [];

  if (keyRings.length) {
    console.log('Key rings:');
    keyRings.forEach(keyRing => console.log(keyRing.name));
  } else {
    console.log('No key rings found.');
  }
}).catch(err => {
  console.log('ERROR: ', err);
});

// [END kms_quickstart]
