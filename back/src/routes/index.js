const indexRoutes = require('express').Router();

 
 const routesProyects=require('./routerProyect')
 
indexRoutes
    
        .use('/proyects',routesProyects);
    
    
    indexRoutes.get('/', (req, res) => {
        res.send('Hello World!');
      });
 
module.exports = indexRoutes;