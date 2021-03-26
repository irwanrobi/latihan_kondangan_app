const express = require('express')
const dashboard = express.Router()

dashboard.get('/', (req, res) => {
    res.render('dashboard', {
        isLogin : true,
        user : "irwanrobi"
    });
});

module.exports = dashboard;