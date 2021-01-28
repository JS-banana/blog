const server = require('http');
const { spawn } = require('child_process');

server
  .createServer((req, res) => {
    // accept request
    console.log(`accept request：${new Date()}`);
    // 接收POST请求
    if (req.method === 'POST') {
      //TODO: secret 验证

      let data = '';

      req.on('data', chunk => {
        data += chunk;
      });

      req.on('end', () => {
        // console.log(JSON.parse(data));
        try {
          const reqData = JSON.parse(data);
          // 确定身份
          if (reqData.pusher.username !== 'asdJimNXfh') {
            res.writeHead(400);
            res.end('noooo!');
            return;
          }
          // 确定分支 master
          if (reqData.ref === 'refs/heads/master') {
            // 确定仓库
            const repository_name = reqData.repository.name;
            runCommand('sh', [`${repository_name}.sh`], console.log);
          }
          // response
          res.writeHead(200);
          res.end('ok');
        } catch (error) {
          console.log('error：', error);
          res.writeHead(500);
          res.end('error!');
        }
      });
    } else {
      res.writeHead(404);
      res.end('no info!');
    }
  })
  .listen(3010);

// run command
function runCommand(cmd, args, callback) {
  let response = '';
  const child = spawn(cmd, args);
  child.stdout.on('data', buffer => {
    response += buffer.toString();
  });
  child.stdout.on('end', () => callback(response));
}
