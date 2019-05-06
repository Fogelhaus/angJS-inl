const bodyParser = require('body-parser');
const express = require('express');
const app = express();


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
        return res.status(200).json({});
    }

    next();
});
//Body-Parser

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routes
const productRoutes = require('./routes/products');
app.use('/api/products', productRoutes);

const usersRoutes = require("./routes/users.js");
app.use("/api/users", usersRoutes);

module.exports = app;