const express = require('express');
const db = require('./queries.js');
const port = 3030;
const app = express();

let data = {name: 'Naruto Uzumaki', power: 'Kage Bunshin No Jutsu'}; 

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/getAllVehicles', db.getAllVehicles);

app.get('/', function (req, res) {
    res.send('Hello World!!!');
});

app.get('/name', function (req, res) {
    res.send('Abe Johnson');
});


app.get('/json', function(req, res) {
    res.status(200).json(data);
});

app.post('/json', function(req, res) {
    // console.log(req.body);
    // data = {...data, ...req.body}
    Object.assign(data, req.body);
    res.status(200).json(data);
});


console.log(`Starting server on port ${port}`);
app.listen(port);