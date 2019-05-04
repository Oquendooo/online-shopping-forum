const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const categoriesData = require('./data/categories')
const citiesData = require('./data/cities')
const listingsData = require('./data/listings')
//create the express app
const app = express()

// create the middleware to serve the static app files
app.use('/', serveStatic(path.join(__dirname, '/public')))

// Show all the cities available
app.get('/api/cities',  (req, res) => {
  res.json(citiesData)
})
// Show all the categories for a city
app.get('/api/:city/',  (req, res) => {
  res.json(categoriesData)
})
// Show all the sub categories for that city
app.get('/api/:city/:categories',  (req, res) => {
  res.json(categoriesData)
})
// Show all the listings for that sub categorie
app.get('/api/:city/:categories/:sub-category/',  (req, res) => {
  res.json(categoriesData)
})
// Show a listing that was selected for that city/category/sub-category/listing
app.get('/api/:city/:categories/:sub-category/:listing',  (req, res) => {
  res.json(categoriesData)
})
app.get('*',  (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

// create default port to serve the app
const PORT = process.env.PORT || 5000
app.listen(PORT)
console.log('Server is running on port ' + PORT)