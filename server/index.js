const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('../db');
const attendee = require('./controllers/attendee.js');

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/public')));

// const dontUseMe = () => throw new Error('implement controllers');

app.get('/attendees', (req, res) => {
  attendee.getAll(req, res)
});
app.post('/attendees', (req, res) => {
  attendee.add(req, res)
});
app.delete('/attendees', (req, res) => {
  attendee.delete(req, res)
})
app.put('/attendees', (req, res) => {
  attendee.update(req, res)
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Web server running on: http://localhost:${PORT}`);
});
