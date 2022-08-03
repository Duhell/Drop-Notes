const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')
const connectToDB = require('./server/database/connection')


const app = express()

dotenv.config({path: 'config.env'})
const PORT = process.env.PORT

if (PORT == null || PORT == "") {
	PORT = 3000
}

//log
app.use(morgan('tiny'))

//mongodb connection
connectToDB()

//parse request to body-parser
app.use(bodyParser.urlencoded({extended: true}))

//load assets
app.use(express.static('assets'))

//set view engine "ejs"
app.set('view engine',"ejs")
app.set('views',path.join(__dirname, "views"))


//router
app.use('/', require('./server/routes/router'))
app.listen(PORT,()=>console.log(`Service is on running on PORT ${PORT}`))