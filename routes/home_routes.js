// import package yang dibutuhkan
const express = require('express')
const home = express.Router()

// routing HOME
home.get('/', (req, res) => {
    res.render('index')
})

module.exports = home