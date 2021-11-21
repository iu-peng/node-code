const http = require("http");
const queryString = require("querystring");
const port = 3000;

const server = http.createServer((req, res) => {
  const params = queryString.parse(req.url.split("?")[1]);
  console.log("收到请求", params);

  const path = req.url.split("?")[0];
  const method = req.method;
  if (path === "/api/list" && method === "GET") {
    const result = [
      {
        user: "张三",
        content: "内容1",
      },
      {
        user: "李四",
        content: "内容2",
      },
    ];
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(JSON.stringify(result));
  }
  if (path === "/api/create" && method === "GET") {
    const result = {
      date: "success",
    };
    const bodyStr = "";
    res.on("data", (chunk) => {
      bodyStr += chunk;
    });
    res.on("close", () => {
      console.log("结束了");
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(JSON.stringify(result));
    });
    return;
  }

  res.writeHead(404, { "Content-type": "text/plain" });
  res.end("404 not found");
});
server.listen(port);
console.log(`服务启动了 请访问 http://localhost:${port}`);
