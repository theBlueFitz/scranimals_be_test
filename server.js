const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config({path:'./config.env'});
const port = process.env.PORT || 3000;
const apiRouter = require('./routers/api.routers')

app.use(cors());
app.use(express.json());

// app.use("/api", apiRouter);
app.use(require('./routes/record'));

app.all("/*", (req, res) => {
    res.status(400).send({msg : 'Path not found'})
});

const dbo = require('./db/conn');

app.listen(port, () => {
    dbo.connectToServer(function (err) {
        if (err) console.error(err)
    });
    console.log(`Server is running on port: ${port}`)
})