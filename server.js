const express = require('express');
const mongoose = require('mongoose');
const ToDo = require('./model');
const app = express();
app.use(express.json());
mongoose.connect('mongodb+srv://sampurnamukkara_db_user:swapna@cluster0.ygrblnj.mongodb.net/').then(() => console.log('connected to db..')).catch(err => console.log(err))
app.post('/add_user',async (req,res) => {
    const {title} = req.body;
    const {description} = req.body;
    const {completed} = req.body;
    const {priority} = req.body;
    const {dueDate} = req.body;
    try{
        const newData = new ToDo({title,description,completed,priority,dueDate});
        await newData.save();
        return res.json("user can be sucessful")
    }
    catch(err){
        console.log(err.message);
    }
})
app.get('/get_all_data',async(req,res)=>{
    try{
        const allData = await ToDo.find();
        return res.json(allData);
    }
    catch(err){
        console.log(err.message);
    }
})
app.put('/update/:id', async(req,res) => {
        const {title}=req.body;
        const {description}=req.body;
        const {completed}=req.body;
        const {priority}=req.body;
        const {dueDate}=req.body;

        try{
            await ToDo.findByIdAndUpdate(req.params.id,{title,description,completed,priority,dueDate},

            );
         return res.json(await ToDo.find());
        }
        catch(err){
            console.log(err.message);
        }
    });
app.listen(3000,()=>console.log('server running on http://localhost:3000'))