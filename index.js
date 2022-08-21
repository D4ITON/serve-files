const express = require("express");
const app = express();
require("dotenv").config();
const { version } = require("./package.json");
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || "development";

app.get("/", (req, res) => {
  try {
    const fileToSend = `./storage/${file}`;

    res.download(fileToSend); // Set disposition and send it.
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Problemas con el servidor.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`[${SERVER_NAME}] ----- SERVE FILES-----`);
  console.log(`[${SERVER_NAME}] http://localhost:${PORT}`);
  console.log(`[${SERVER_NAME}] Version: ${version} | Entorno: ${NODE_ENV}`);
  console.log(`[${SERVER_NAME}] ----- BIENVENIDO :) -----`);
});
