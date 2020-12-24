const express = require('express');
const app = express();

const db = require('./users.json');
//db = JSON.parse(db);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
  res.header(
    'Access-Control-Allow-Headers',
    'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization'
  );

  console.log(req.get('authorization'));

  next();
});

app.get('/dist_login', (req, res) => {
  //   db.forEach((user, i) => {
  //     if (req.query.user === user.user && req.query.pass === user.pass) {
  //       res.json(db[i].assets);
  //     }
  //   });

  //   res.send('User not found');
  //console.log(req.headers['Authorization'].username);
  console.log(req.headers.authorization);
  res.send(req.headers);
});

// Listen
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
