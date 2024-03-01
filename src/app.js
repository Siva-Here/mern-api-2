require('./db/conn')
const express=require('express')
const app=express()
const Men=require('./routers/men')
const PORT=process.env.PORT || 8000
app.use(express.json())
app.use(Men)
app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`)
})