const express = require('express');
const bodyParser = require('body-parser');

const postsRoute = require('./routes/post.routes');
const userRoute = require('./routes/user.routes');

const app = express();

app.use(bodyParser.json());
app.use("/posts", postsRoute);
app.use("/user", userRoute);

module.exports = app;