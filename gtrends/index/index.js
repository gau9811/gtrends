let express = require('express')
let app = express()
let PORT = 5000 || process.env.PORT
let connnectToDb = require('../db/connectdb')



connnectToDb()
app.use(express.json())
app.use('/api', require('../routes/userRoutes'))


app.listen(PORT, () => console.log(`server is running at ${PORT}`))