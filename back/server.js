const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;
const routes=require('./src/routes/index')


mongoose.connect('mongodb://localhost:27017/portafoleo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB', err);
});

app.use(express.json());
app.use('/', routes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});