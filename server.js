const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

var dbUrl = "mongodb://localhost/mindsprint";
mongoose.connect(dbUrl, {useNewUrlParser: true, useCreateIndex: true})
    .then(() => console.log('Server is Connected...'))
    .catch((err) => console.log(err));

app.use('/api/question', require('./routes/api/questions'));
app.use('/api/faqs', require('./routes/api/faqs'));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started at port ${port}`));
