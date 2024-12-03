const http = require("http");

const server = http.createServer(async (req, res) => {
  if (req.url === "/getSecretData") {
    res.end("No Secret Data Dumbo");
  } else {
    res.end("Hello");
  }
});

server.listen(5555);
