const express = required("express")

const app = express()

const port = process.env.port || 5000

app.listing(5000, ()=>{
    console.log ("server has started running...")
})