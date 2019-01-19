import express from 'express';
import constants from './config/constants';
import { database } from './config/database';
import middleware from './config/middleware';

const app = express();
middleware(app);

app.get('/', (req, res) => {
  console.log('in');
  res.send('hello world');
})

app.listen(constants.port, err => {
    if (err) {
      console.log(err);
      throw err;
    } else {
      database.setupConnection();
      console.log('yay server listening at port ' + constants.port + ' env ' + constants.env);
    }

// app.get('/', (req, res) => {
//   res.end('hello');
// });
})
