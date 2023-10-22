const http = require("http");

const server = http.createServer(function exec(req, res) {
  console.log(req.method);
  if (req.url == "/home") {
    res.end("Home");
  } else if (req.url == "/vip") {
    res.end("vipin");
  } else {
    res.end(req.url);
  }
});

const PORT = 3006;

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
