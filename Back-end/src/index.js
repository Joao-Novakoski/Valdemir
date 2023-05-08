const express = require('express')
const cors = require('cors')
const router = require('./router/routes')

require('dotenv').config()
const app = express()

require('./database')

app.use(cors())
app.use(express.json())
app.use('/api', router)

const port = process.env.PORT

app.listen(port || 3030)
