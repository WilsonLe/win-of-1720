require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path');

app.use(express.static('../win-of-1720-frontend/build'))

app.use(cors())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../win-of-1720-frontend/build', 'index.html'))
});


app.set('PORT', process.env.PORT || 3000)
app.listen(app.get('PORT'), () => {
    console.log('App started on port', app.get('PORT'));
})