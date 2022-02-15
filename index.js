const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors');
app.use(cors())

const db = require('./queries')

const PORT = 3000



app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (req, res) => {
    res.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/products', db.getUsers)
app.get('/products/:id', db.getUserById)


app.post('/orders', db.createUser)



app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)



app.listen(PORT, () => {
    console.log(`App running on port ${PORT}.`)
})