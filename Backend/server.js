const express=require("express")
const app=express()


const db=require('./db');
const Todo=require('./modeTodo');
const  cors =require('cors'); 
app.use(express.json())
app.use(cors())
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
    console.log("Data:",data)

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


app.delete('/tasks/:title',(req,res)=>{
    console.log('25:',req.body)
    Todo.deleteOne({title:req.params.title},(err,data)=>{
if(err){

    console.log("Error:",err)
    res.status(500).json("problem in DB")
}
else {

    res.json(data);
} })    
})




app.listen(5000,()=>{

    console.log("Server is working...")
})