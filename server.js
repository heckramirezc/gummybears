const express = require('express');
const path = require('path');
const proxy = require('express-request-proxy');

const port = process.env.PORT || 8080;
const apiHost = 'https://www.gyssa.com';

const app = express();
// serve static assets normally
app.use(express.static(`${__dirname}/public`));
// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.all('/cms*', (request, response) => {
  console.log('app.all.csm', request);
  response.status(404).send('Not found');
});
app.get('*', proxy({
  url: `${apiHost}/*`,
}), (request, response) => {
  console.log('app.get', response);
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});
app.listen(port);
// alert(`server started on port ${port}`);
console.log('server started on port 8080');
