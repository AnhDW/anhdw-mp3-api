const express = require('express')
const path = require('path')
const apiRouters = require('./routers/api')
    //const authRouters = require('./routers/auth')

const app = express()
const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, './frontend')))

app.use('/api', apiRouters)
    //app.use('/auth', authRouters)

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/frontend/index.html')
})

app.listen(port, () => {
    console.log('server is running...')
})