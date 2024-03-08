const authConfig = require("../config/index");

module.exports = async (req, res, next) => {
  if (!req.headers.authorization) {
    res.status(401).json({ msg: "Acceso no autorizado" });
  } else {
    const token = req.headers.authorization.split(" ")[1];
   
    if (token !== authConfig.secret) {
        
      res.status(403).json({ msg: "Token inválido" });
    } else {
      next();
    }
  }
};

