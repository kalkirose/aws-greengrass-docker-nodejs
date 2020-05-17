var awsIot = require('aws-iot-device-sdk');

//
// Replace the values of '<YourUniqueClientIdentifier>' and '<YourCustomEndpoint>'
// with a unique client identifier and custom host endpoint provided in AWS IoT.
// NOTE: client identifiers must be unique within your AWS account; if a client attempts 
// to connect with a client identifier which is already in use, the existing 
// connection will be terminated.
//
const PRIVATE_KEY= process.env.PRIVATE_KEY
const THING_CERT=process.env.THING_CERT
const AWS_ROOT_CERTIFICATE=process.env.AWS_ROOT_CERTIFICATE
const CLIENT_ID=process.env.CLIENT_ID
const HOST=process.env.HOST

var device = awsIot.device({
   keyPath: PRIVATE_KEY,
  certPath: THING_CERT,
    caPath: AWS_ROOT_CERTIFICATE,
  clientId: CLIENT_ID,
      host: HOST
});


//
// Device is an instance returned by mqtt.Client(), see mqtt.js for full
// documentation.
//
device
  .on('connect', function() {
    console.log('connect');
    device.subscribe('hello');
    
    device.publish('things/test', JSON.stringify({ data: "heartbeat"}));
  });

device
  .on('message', function(topic, payload) {
    console.log('message', topic, payload.toString());
  });