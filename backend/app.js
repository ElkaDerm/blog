

const express = require('express')
const { urlencoded } = require('express')
const path= require('path')
const cookieParser= require('cookie-parser')

const indexRouter= require('./routes/index.js');
const userRouter= require('./routes/users.js');
const postRouter= require('./routes/posts.js')
const startDB=require('./database/databaseConfig.js')

const app = express()
const port = 3001


startDB()
app.use(express.static(path.join(__dirname,'public')))
app.use(cookieParser())
app.use(express.json())
app.use(urlencoded({extended:false}))

app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/posts', postRouter)




app.listen(port, () => {
  console.log(`Backend app listening at http://localhost:${port}`)
})