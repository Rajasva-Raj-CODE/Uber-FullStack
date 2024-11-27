import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './DB/db.js';

dotenv.config();
connectDB();
const app = express();
app.use(cors());


app.get('/',(req,res)=>{
    res.send('Hello World!')
})

export default app;