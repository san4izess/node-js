const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log("server request");
  console.log(req.url, req.method);

  res.setHeader("Content-Type", "text/html");

  res.write("Sasha");

  const data = JSON.stringify([{ name: "sasha", age: 20 }]);

  res.end(data);
});

server.listen(PORT, "localhost", (error) => {
  error ? console.error(error) : console.log("listening on port " + PORT);
});
