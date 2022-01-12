const express = require('express');
const bodyParser = require('body-parser');

const postsRoute = require('./routes/post.routes');
const userRoute = require('./routes/user.routes');

const app = express();

app.use(bodyParser.json());

app.use("/api/posts", postsRoute);
app.use("/api/user", userRoute);

//
/* app.get('/api/posts',(req, res) =>{
    res.redirect('/api/posts')
})
 */


module.exports = app;