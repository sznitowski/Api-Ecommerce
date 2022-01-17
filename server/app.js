const express = require('express');
const bodyParser = require('body-parser');

const postsRoute = require('./routes/post.routes');
const userRoute = require('./routes/user.routes');
const path = require("path");
const app = express();

app.use(bodyParser.json());

app.use("/api/posts", postsRoute);
app.use("/api/user", userRoute);
const { errorHandler, notFound } = require("./middleware/errorMiddleware.js");

// --------------------------deployment------------------------------

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}
// --------------------------deployment------------------------------
// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);


module.exports = app;