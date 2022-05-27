const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json({ extended: true }));

app.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  (request, response) => {
    let event = request.body;
    console.log(request);
    console.log(event);

    response.send();
  }
);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

app.listen(port, () => console.log("Running on port: " + port));
