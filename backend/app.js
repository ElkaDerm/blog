

const { urlencoded } = require('express')
const express = require('express')
const path= require('path')

const indexRouter= require('./routes/index.js');
const userRouter= require('./routes/user.js')


const app = express()
const port = 3001

app.use(express.json())
app.use(urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))

app.use('/', indexRouter);
app.use('/user', userRouter)



app.listen(port, () => {
  console.log(`Backend app listening at http://localhost:${port}`)
})