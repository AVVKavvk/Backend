const http = require("http");

const server = http.createServer(function exec(req, res) {
  res.end("vipin");
});

const PORT = 3006;

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
