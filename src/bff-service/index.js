const express = require("express");
require("dotenv").config();
const axios = require("axios").default;
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.all("/*", (req, res) => {
  console.log("originalUrl", req.originalUrl);
  console.log("method", req.method);
  console.log("body", req.body);

  const recipient = req.originalUrl.split("/")[1];
  console.log("recipient", recipient);
  const recipientUrl = process.env[recipient];
  console.log("recipientUrl", recipientUrl);

  if (recipientUrl) {
    const axiosConfig = {
      method: req.method,
      url: `${recipientUrl}`,
      ...(Object.keys(req.body || {}).length > 0 && { data: req.body }),
    };
    console.log("axiosConfig", axiosConfig);
    axios(axiosConfig)
      .then((response) => {
        // console.log("response from recipient", response);
        res.json(response.data);
      })
      .catch((error) => {
        console.log("error:", JSON.stringify(error));
        if (error.response) {
          const { status, data } = error.response;
          res.status(status).json(data);
        } else {
          res.status(500).json({ error: error.message });
        }
      });
  } else {
    res.status(502).json({ error: "Cannot process request" });
  }
});
app.listen(PORT, () =>
  console.log(`App is running on http://localhost:${PORT}`)
);
