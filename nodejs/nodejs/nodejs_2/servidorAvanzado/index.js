const http = require("http");
const fsPro = require("fs").promises;
const fs = require("fs");
const path = require("path");

// request es http!!!
const server = http.createServer(async (req, res) => {
  try {
    if (req.url === "/") {
      const data = await fsPro.readFile(
        path.join(__dirname, "index.html"),
        "utf-8"
      );
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    } else if (req.url.match(/.css$/)) {
      const cssPath = path.join(__dirname, req.url);
      const stream = fs.createReadStream(cssPath);
      res.writeHead(200, { "Content-Type": "text/css" });
      stream.pipe(res);
    } else if (req.url.match(/.jpg$/)) {
      const jpgPath = path.join(__dirname, req.url);
      const stream = fs.createReadStream(jpgPath);
      res.writeHead(200, { "Content-Type": "image/jpg" });
      stream.pipe(res);
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
    }
  } catch (error) {
    console.error("Server error:", error);
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Internal Server Error");
  }
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
