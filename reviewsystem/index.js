import express from 'express';
import session from 'express-session';
import mongoose from "mongoose";
import bodyParser from "bodyparser";
const authRoutes = require('./routes/authRoutes');
const studentRoutes = require('./routes/studentRoutes');
const interviewRoutes = require('./routes/interviewRoutes');
const resultRoutes = require('./routes/resultRoutes');
const User = require('./models/User');
const app = express();
mongoose.connect('your-mongodb-url', { useNewUrlParser: true, useUnifiedTopology: true });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));
app.set('view engine', 'ejs');
app.use('/auth', authRoutes);
app.use('/students', studentRoutes);
app.use('/interviews', interviewRoutes);
app.use('/results', resultRoutes);
app.get('/', (req, res) => {
  res.render('index');
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});
export default app;
