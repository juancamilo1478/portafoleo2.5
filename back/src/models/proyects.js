const mongoose = require('mongoose');

const proyectShema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    skills: { type: Array, required: true },
    photos: { type: Array, required: true },
    video:{ type: String, required: true },
    category:{
        type:String,
        enum:["web","movile","desktop"],
        default:"web"
    }
});
const Proyect=mongoose.model('Proyect',proyectShema)
module.exports=Proyect;