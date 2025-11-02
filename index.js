import express from 'express';
import dotenv from 'dotenv';
dotenv.config()
const app = express();

app.get('/', (req,res)=>{
    res.send('Hello World from Express.js');
})

app.listen(process.env.PORT , ()=>{
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
