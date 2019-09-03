const router = require('./routers/routes');
const express = require('express')
const cors = require('cors');
const app = express()
const port = process.env.PORT || 8080
app.use(cors())
app.use(express.json())
app.use(router)
app.listen(port, ()=>{
console.log(`Server running on https:127.0.0.1:${port}`)
})
