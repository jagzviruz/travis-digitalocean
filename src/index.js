const express = require('express')
const app = express()
const port = process.env.NODE_ENV === 'production' ? 80 : 3000

app.get('/', (req, res) => res.send('Hello World v1!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))