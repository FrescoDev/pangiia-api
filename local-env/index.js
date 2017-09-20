const express = require('express')
const app = express()
const morgan = require('morgan')
const port = 3000

app.use(morgan('dev'))

app.get('/rss-calendar-feed', function (req, res) {
    res.set('Content-Type', 'text/xml')
    res.sendFile(__dirname + '/data-sources/rss-parliament-feed.xml');
})

app.listen(port, function () {
    console.log('Server listening on Port: ', port)
})