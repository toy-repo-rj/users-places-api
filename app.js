const express = require('express')
const bodyParser = require('body-parser')

const HttpError = require('./models/HttpError')
const placesRoute = require('./routes/places-route')

const PORT = 5000
const app = express()

app.use(bodyParser.json())

app.get('/hi', (req, res, next) => {
    console.log('I am called')
    res.json({ message: 'Hi' })
})

app.use('/api/places', placesRoute)

app.use((req, res, next) => {
    //throw new HttpError('Unsupported api path...', 404)
    next(new HttpError('Unsupported api path...', 404))
})

app.use((error, req, res, next) => {
    if (res.headersSent) {
        return next(error)
    }
    res.status(error.code || 500).json({
        code: error.code || 500,
        message: error.message || 'An unknown exception occured...'
    })
})

app.listen(PORT, () => console.log(`Starting server on http://localhost:${PORT}`))