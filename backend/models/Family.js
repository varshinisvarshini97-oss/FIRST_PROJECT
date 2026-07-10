import mongoose from "mongoose";


const familySchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    age:{
        type:Number,
        required:true
    },

    gender:{
        type:String,
        required:true
    },

    relation:{
        type:String,
        required:true
    },

    phone:{
        type:String,
        required:true
    }

});


const Family = mongoose.model("Family", familySchema);


export default Family;