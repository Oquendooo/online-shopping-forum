const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

//create the express app
const app = express()

// create the middleware to serve the static app files
app.use('/', serveStatic(path.join(__dirname, '/public')))

app.get('*',  (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})


// create default port to serve the app
const PORT = process.env.PORT || 5000
app.listen(PORT)
console.log('Server is running on port ' + PORT)