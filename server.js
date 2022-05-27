const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json({ extended: true }));

const corsOptions = {
  origin: "fivetranwebooktest.herokuapp.com",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.post(
  "/webhook",
  cors(corsOptions),
  express.raw({ type: "application/json" }),
  (request, response) => {
    let event = request.body;
    console.log(request);
    console.log(request.headers);
    console.log(request.headers.referer);
    console.log(event);

    response.status(204).send();
  }
);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

app.listen(port, () => console.log("Running on port: " + port));
