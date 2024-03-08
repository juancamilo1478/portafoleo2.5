const mongoose = require('mongoose');

const ComentarieShema = new mongoose.Schema({
    user: { type: String, required: true },
    description: { type: String, required: true },
    photo: { type: Array, required: true },
});
const Comentarie=mongoose.model('Comentarie',ComentarieShema)
module.exports=Comentarie;