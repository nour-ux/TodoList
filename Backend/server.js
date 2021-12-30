const express=require("express")
const app=express()

const db=require('./db')
const Todo=require('./modeTodo')

app.use(express.json())
app.get('/',(req,res)=>{

    res.json('Get / is working ❤️✨')
    
})

app.get('/tasks',(req,res)=>{
    Todo.find({},(err,data)=>{
if(err){

    console.log("Error:",err)
}
else{

    res.json(data)
} })    
})


app.post('/tasks',(req,res)=>{
    console.log('25:',req.body)
    Todo.create(req.body,(err,data)=>{
if(err){

    console.log("Error:",err)
}
else{

    res.json(data);
} })    
})




app.listen(5000,()=>{

    console.log("Server is working...")
})