const express = require('express')
const app = express()

app.get('/', (req,res)=> {
    res.send("Server Mantap")
})

app.listen(3000, ()=> {
    console.log(`Running Server Port : 3000`)
})