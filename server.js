const http      = require('http');
const sillyname = require('sillyname');
const pkg       = require('./package.json');

const name    = pkg.name;
const version = pkg.version;
const port    = process.env.PORT || '8080';

const app = new http.Server();

app.on('request', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write(sillyname());
  res.end('\n');
});

app.listen(port, () => {
  console.log(`${name}@${version} is listening on port ${port}`);
});
