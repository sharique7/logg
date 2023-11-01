const express =require ('express');
const mongoose= require('mongoose');
const bodyParser= require('body-parser');
const cors=require('cors');


const app= express();
app.use(bodyParser.json());
app.use(cors());


mongoose.connect('mongodb://localhost:27017',{useNewUrlParser: true, useUnifiedTopology: true})
         .then(()=> console.log("MongoDB Connected"))
         .catch(err => console.log(err));


const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server Is Runnin on ${PORT}`);
})