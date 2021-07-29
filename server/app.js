const express = require("express");
const db = require("./lib/db");
const mongoose = require("mongoose");
const cors = require("cors");
/*
  We create an express app calling
  the express function.
*/
const app = express();

/*
  We setup middleware to:
  - parse the body of the request to json for us
  https://expressjs.com/en/guide/using-middleware.html
*/
app.use(express.json());

/*
  Endpoint to handle GET requests to the root URI "/"
*/
app.get("/", (req, res) => {
  res.json({
    "/articles": "read and create new articles",
    "/articles/:id": "read, update and delete an individual article",
  });
});

/*
  Connected to Mongo, if successful, put our express app to listen in port 4000


*/
mongoose
  .connect("mongodb://localhost:27017/", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to mongo");
    app.listen(4000, () => {
      console.log("Listening on http://127.0.0.1:4000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
