/* eslint-disable no-console */
import '@babel/polyfill';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import dbConnect from './database';

const app = express();
dbConnect();

app.enable('trust proxy');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 1500;

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
