const { createProyect, getProyect,deleteProyect ,proyectid} = require('../controllers/index');
const middleware = require("../midalwere/auth");
const multer = require('multer');
const upload = multer();
const proyectController = require("express").Router();

proyectController.get('/getproyect', getProyect);
proyectController.get('/getproyect/:id',proyectid);
proyectController.delete('/delete/:id', middleware, deleteProyect);
proyectController.post('/create', middleware,upload.array('files'), createProyect);

module.exports = proyectController;
