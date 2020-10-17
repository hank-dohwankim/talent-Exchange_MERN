const express = require('express');
const posts = require('./data/posts');

const app = express();

app.get('/', (req, res) => {
  res.send('API is running');
});

app.get('/api/posts', (req, res) => {
  res.json(posts);
});

app.get('/api/posts/:id', (req, res) => {
  const post = posts.find((p) => p._id === req.params.id);
  res.json(post);
});

app.listen(5000, console.log('Server running on port 5000'));
