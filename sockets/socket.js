const { io } = require("../index.js");
// Mensajes de sockets
io.on("connection", (client) => {
  console.log("Cliente conectado");
  client.on("disconnect", () => {
    console.log("Cliente desconectado");
  });
  client.on("mensaje", (payload) => {
    io.emit("mensaje", { admin: "nuevo mensaje" });
    console.log("Mensaje", payload);
  });
});
