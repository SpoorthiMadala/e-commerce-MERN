import 'dotenv/config'
import path from 'path';
import express from 'express';
import connectDB from './config/db.js';
import productRoutes from './routes/product.route.js';

const host = "http://localhost";
const port = parseInt(process.env.PORT) || 5000;
const app =express();

const __dirName = path.resolve();
app.use(express.json()) 
app.use(express.urlencoded({extended:true}))
app.use("/api/products",productRoutes)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirName, 'frontend/dist/')))
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirName, 'frontend', 'dist', 'index.html'))
    })
}
app.listen(port,()=>{
    connectDB();
    console.log(`Backend Server is running on ${host}:${port}`)
})