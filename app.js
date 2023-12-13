const express = require('express');
const app = express();
const data = [
    {
        id: 1,
        name: 'product1',
        cost: 120,
        count: 5
    },
    {
        id: 2,
        name: 'product2',
        cost: 80,
        count: 3
    },
    {
        id: 3,
        name: 'product3',
        cost: 150,
        count: 7
    },
    {
        id: 4,
        name: 'product4',
        cost: 200,
        count: 2
    },
    {
        id: 5,
        name: 'product5',
        cost: 90,
        count: 4
    },
    {
        id: 6,
        name: 'product6',
        cost: 110,
        count: 6
    },
    {
        id: 7,
        name: 'product7',
        cost: 180,
        count: 8
    },
    {
        id: 8,
        name: 'product8',
        cost: 130,
        count: 1
    },
    {
        id: 9,
        name: 'product9',
        cost: 160,
        count: 5
    },
    {
        id: 10,
        name: 'product10',
        cost: 100,
        count: 9
    },
]

app.get('/', function (req, res) {
    res.send('Home Page');
});

app.get('/data', function (req, res) {
    res.send(data);
});

app.get('/data/:id', function (req, res) {
    const selectedUser = data.find((d) => d.id == req.params.id)
    if (selectedUser) {
        res.send(selectedUser)
    } else {
        res.status(404).send('bele mehsul yoxdur')
    }
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});