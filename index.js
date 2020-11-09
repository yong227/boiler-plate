const express = require('express')
const app = express()
const port = 5000
const bodyParser =  require('body-parser')
const { User } = require('./models/User')
const config = require('./config/key')

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

const monggoose = require('mongoose')
monggoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.post('/register', (req, res) => {
    // 회원가입 할때 필요한 정보를 client에서 가져오면
    // DB에 저장.

    const user = new User(req.body)

    user.save((err, userInfo) => {
        if(err) return res.json({success: false, err})
        return res.status(200).json({success: ture})
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}!`)
})