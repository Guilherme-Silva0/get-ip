const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  res.json({ ip: ip });
});

app.listen(3000, () => {
  console.log("Servidor ouvindo na porta 3000");
});
