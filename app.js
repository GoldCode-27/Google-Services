import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})