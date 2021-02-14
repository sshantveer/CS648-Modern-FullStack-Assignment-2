const express = require('express');

const app = express();

app.use(express.static('public'));

app.listen(3000, function () {
    console.log('Assignment 2 App started on port 3000');
});