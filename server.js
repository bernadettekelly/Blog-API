const express = require('express');
const morgan = require('morgan');

const BlogPostsRouter = require('./BlogPostsRouter');

const app = express();

app.use(morgan('common'));

app.use('/BlogPosts', BlogPostsRouter);

app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});

