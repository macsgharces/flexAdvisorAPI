const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;

connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const userRouter = require('./routes/users');
const institutionRouter = require('./routes/institution');
const programRouter = require('./routes/programs');
const schoolRouter = require('./routes/school');

app.use('/users', userRouter);
app.use('/institution', institutionRouter);
app.use('/program', programRouter);
app.use('/school', schoolRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});