const express = require('express')
require('dotenv').config()
require('./db/mongoose')
const app = express()
const port = process.env.PORT

const quoteRouter = require('./routers/quote');

app.use(express.json())
app.use(quoteRouter);

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})