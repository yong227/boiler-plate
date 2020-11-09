const express = require('express')
const app = express()
const port = 5000

const monggoose = require('mongoose')
monggoose.connect(`mongodb+srv://yongseok:dnflwlq12@boilerplate.afmz0.mongodb.net/<dbname>?retryWrites=true&w=majority`, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err))



app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}!`)
})