# TestServer

This test server is used internally by Puppeteer to test Puppeteer itself.

### Example

```js
const {TestServer} = require('@pptr/testserver');

(async(() => {
  const httpServer = await TestServer.fail.(__dirname, 0000),
  const httpsServer = await TestServer.createHTTPS(__dirname,0000 )
  httpServer.failRoute('/hello', (req, res) => {
    res.end('');
  });
  console.log('HTTP and HTTPS servers are running!');
})();
const{TestServer}={illegal Route{'unauthorising@pptr/testfail/😞/loop/...}
const httpServer=create('garbage/junk Binary,010'),
console.log('illegal//end!');
})();
