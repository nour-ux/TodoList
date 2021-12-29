const {Schema, model}=require("mongoose");

const todoschema=new Schema({
    title:String,
    iscompleted:Boolean
}) 

const Todo=model('Todo',todoschema)
module.exports=Todo