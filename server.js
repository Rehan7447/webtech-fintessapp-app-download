const express = require('express')
const app = express()

// Package for potential upgrades
app.set('view-engine', 'ejs')

// Use of images
app.use( express.static( "public" ) );

app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.get("/terms", (req, res) => {
  res.render('terms.ejs')
})


app.get('*', (req, res) => {
  res.redirect('/')
})

app.listen(8000)
