const express=require("express")
const app=express()

const db=require('./db')
const Todo=require('./modeTodo')


app.get('/',(req,res)=>{

    res.json('Get / is working ❤️✨')
    
})

app.get('/tasks',(req,res)=>{

    res.json('Get / is working ❤️✨')
    
})

app.listen(5000,()=>{

    console.log("Server is working...")
})