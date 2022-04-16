const express = require('express')
const path = require('path')
const apiRouters = require('./routers/api')

const app = express()
const port = process.env.PORT || 3001

app.use(express.static(path.join(__dirname, './frontend')))

app.use('/api', apiRouters)

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/frontend/index.html')
})

app.listen(port, () => {
    console.log('server is running...')
})