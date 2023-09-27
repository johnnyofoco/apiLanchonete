const express = require('express')
const app = express()

const PORT = process.env.port || 3000


app.get('/api', (req, res)=>{
    res.send('<h1>API online</h2>')
})


app.listen(PORT, ()=>{
    console.log(`Server is running in port: ${PORT}`)
})