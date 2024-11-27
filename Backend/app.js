import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();

dotenv.config();
app.use(cors());

app.get('/',(req,res)=>{
    res.send('Hello World!')
})

export default app;