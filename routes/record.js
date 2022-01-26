const express = require('express');

const recordRoutes = express.Router();

const dbo = require('../db/conn');

const {ObjectId} = require('mongodb');

recordRoutes.route('/users').get(function (req,res) {
    let db_connect = dbo.getDb('Test')
    db_connect
        .collection('Users')
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            res.send(result);
          })
})

recordRoutes.route('/users').post((req, res) => {
    let db_connect = dbo.getDb('Test')
    db_connect
        .collection('Users')
        .insertOne(req.body)
        .then(() => {
            res.status(200).send('Lick my arsehole')
        })
})

module.exports = recordRoutes;