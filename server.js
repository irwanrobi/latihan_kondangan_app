const express = require('express')
const hbs = require('express-handlebars')
const cors = require('cors')
const app = express()
const path = require('path')

// ROUTES
const home = require('./routes/home_routes')
const register = require('./routes/register_routes')
const login = require('./routes/login_routes')
const dashboard = require('./routes/dashboard_routes')

// atur DYNAMIC PORT agar bisa gunakan Heroku
const PORT = process.env.PORT || 3000

// middleware
app.use(cors()) 
app.use(express.static(path.join(__dirname , 'public')))
app.use(express.urlencoded({extended : false}))

// view engine setup
app.set('views' , path.join(__dirname, 'view'))
app.set('view engine' , 'handlebars')
app.engine('handlebars' , hbs({
    layoutsDir : path.join(__dirname, 'view/layouts'),
    partialsDir : path.join(__dirname, 'view/components'),
    defaultLayout : 'main_layout.handlebars'
}))

// ROUTING MENGGUNAKAN FOLDER ROUTES
// mengatur route setiap request
app.use('/', home)
app.use('/register' , register)
app.use('/login' , login)
app.use('/dashboard' , dashboard)



// error handle
app.use((req,res) => {
    res.render('404.handlebars')
})

// STARTER SERVER
app.listen(PORT, ()=>{console.log(`server telah  berjalan di port ${PORT}`)})