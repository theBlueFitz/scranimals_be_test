const express = require('express');
const apiRouter = express.Router();

apiRouter.get('/', (req,res) => {
    res.status(200).send('connection ok')
})

module.exports = apiRouter;