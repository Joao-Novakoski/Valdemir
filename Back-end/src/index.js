const express = require('express')
const cors = require('cors')
const router = require('./router/routes')

require('dotenv').config()
const app = express()

require('./database')

app.use(cors())
app.use(express.json())
app.use('/api', router)

app.listen(process.env.PORT||3000)
