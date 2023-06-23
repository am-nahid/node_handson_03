const {data} = require('../controller/api')
const { signin, login, aboutus, contactus } = require('../controller/user')
const auth = require('../middleware/auth')

const route = require("express").Router()

route.get('/data', data)
route.get('/signin',auth, signin)
route.get('/login',auth, login)
route.get('/aboutus', aboutus)
route.get('/contactus', contactus)

module.exports = route

