const express = require("express");
const app = express();
require("dotenv").config();
const { version } = require("./package.json");
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || "development";

app.get("/", (req, res) => {
  try {
    const { file = "" } = req.query;

    if (!file) {
      const template = `
        <code>SERVE FILES ${version}</code><br>
        <code>curl http://localhost:3010/?file=lospalos.zip --output lospalos.zip</code>
        <code>@dalthonmh</code>`;
      res.send(template);
    }

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
  console.log(`[CLOUD] ----- SERVE FILES-----`);
  console.log(`[CLOUD] http://localhost:${PORT}`);
  console.log(`[CLOUD] Version: ${version} | Entorno: ${NODE_ENV}`);
  console.log(`[CLOUD] ----- BIENVENIDO :) -----`);
});
