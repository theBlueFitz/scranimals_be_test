const express = require('express')

const shopRoutes = express.Router()

const dbo = require('../db/conn')

const { ObjectId } = require('mongodb')

shopRoutes.route('/shop').get(function (req, res) {
  let db_connect = dbo.getDb('Test')
  db_connect
    .collection('Shop')
    .find({})
    .toArray(function (err, result) {
      if (err) throw err
      res.send(result)
    })
})

module.exports = shopRoutes
