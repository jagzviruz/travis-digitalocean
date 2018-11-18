require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.NODE_ENV === 'production' ? 80 : 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/version', (req, res) => res.send(process.env.VERSION))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))