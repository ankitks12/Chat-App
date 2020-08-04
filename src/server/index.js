const app = require("express")();
const server = require("http").createServer(app);
const options = {
  /* ... */
};
const io = require("socket.io")(server, options);

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("chat message", function (msg) {
    console.log("message: " + JSON.stringify(msg));
    io.emit("chat message", msg);
  });
});

server.listen(3001);
