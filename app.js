const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({extended:false}))

const user = require('./routes/user.routes')
const auth = require('./routes/auth.routes')
const teacher = require('./routes/teacher.routes')
const student = require('./routes/student.routes')

const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger')


app.use(cors({
 origin : "*"
  // origin : ['http://localhost:3000']
}))

app.use('/api/users',user)
app.use('/api/auth',auth)
app.use('/api/teachers', teacher)
app.use('/api/students', student)


app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument.options)
)


module.exports = app
