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
// // Imports the Google APIs client library
// import kms client lib
const kms = require('@google-cloud/kms');

// initialize kms client with application defaults credentials
const client = new kms.v1.KeyManagementServiceClient();

// Your Google Cloud Platform project ID
const projectId = process.env.GCLOUD_PROJECT;

// Lists keys in the "global" location.
const location = 'global';

var formattedParent = client.locationPath(projectId, location);


// // Lists key rings
client.listKeyRings({parent: formattedParent}, (err, result) => {
  if (err) {
    console.error(err);
    return;
  }
  const keyRings = result || [];

  if (keyRings.length) {
    console.log('Key rings:');
    keyRings.forEach(keyRing => console.log(keyRing.name));
  } else {
    console.log('No key rings found.');
  }

});

// [END kms_quickstart]
