import express  from 'express'
import cors from 'cors'
import 'dotenv/config'
import songRouter from './src/routes/song.route.js';
import connectDb from './src/config/mongodb.config.js';
import connectCloudinary from './src/config/cloudinary.config.js';
import albumRouter from './src/routes/album.route.js';



// app config
const app = express()
const port = process.env.PORT || 3000;
connectDb();
connectCloudinary();


// middlewares
app.use(express.json());
app.use(cors());



// routes
app.use("/api/song", songRouter)
app.use("/api/album", albumRouter)


app.get("/",(req, res)=>{
res.send("api is working")
})

app.listen(port,()=>{
    console.log(`Server Is Running On ${port}`)
})