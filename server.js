const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("./data/database.js");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/", require("./routes"));

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(PORT, () => {
      console.log(`Database is listening on and node port ${PORT}`);
    });
  }
});
