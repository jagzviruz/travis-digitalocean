const express = require('express')
const app = express()
const port = port.env.NODE_ENV === 'production' ? 80 : 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))