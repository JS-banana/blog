const server = require('http');
const querystring = require('querystring');
const { spawn } = require('child_process');

server
  .createServer((req, res) => {
    console.log('method：', req.method);
    if (req.url.search(/vuepress\/?$/i) > 0) {
      // vuepress
      console.log('repositories：vuepress');
      runCommand('sh', [`./vuepress.sh`], console.log);
      runCommand('sh', [`./webhook.sh`], console.log);
    } else if (req.url.search(/hexo\/?$/i) > 0) {
      // hexo
      console.log('repositories：hexo');
      runCommand('sh', [`./hexo.sh`], console.log);
      runCommand('sh', [`./webhook.sh`], console.log);
    }
    let postData;
    // post
    req.on('data', function(chunk) {
      postData += chunk;
    });
    // end
    req.on('end', function() {
      try {
        const data = querystring.parse(postData);
        console.log('end-data：', data.hook.coding);
      } catch (e) {
        console.log('catch-error：', querystring.parse(postData));
      }
    });
    res.writeHead(200);
    res.end('success');
  })
  .listen(3000);

function runCommand(cmd, args, callback) {
  let response = '';
  const child = spawn(cmd, args);
  child.stdout.on('data', buffer => {
    response += buffer.toString();
  });
  child.stdout.on('end', () => callback(response));
}
