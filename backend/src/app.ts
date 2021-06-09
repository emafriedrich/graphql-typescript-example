import express from 'express';
import * as env from './utils/env';

if (process.env.ENV !== 'production') {
  env.config();
}

import './db';
import './graphql';

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/ping', (_, res) => res.send('pong'));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});