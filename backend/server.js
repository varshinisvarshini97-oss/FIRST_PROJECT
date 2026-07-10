import dns from "dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);


import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import familyRoutes from "./routes/familyRoutes.js";


dotenv.config();


const app = express();


app.use(cors());

app.use(express.json());


// Family API

app.use("/family", familyRoutes);



const PORT = process.env.PORT || 5000;



mongoose.connect(process.env.MONGO_URI)

.then(()=>{

console.log("MongoDB Connected Successfully");

})

.catch((error)=>{

console.log(
"MongoDB Connection Error:",
error.message
);

});




app.get("/",(req,res)=>{

res.send("Backend Server is Running");

});



app.listen(PORT,()=>{

console.log(`Server running on port ${PORT}`);

});