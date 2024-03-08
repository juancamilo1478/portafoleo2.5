const { proyectid } = require('.');
const Project = require('../models/proyects');

module.exports= async (req, res) => {
    const projectId = req.params.id;
    console.log(proyectid)
    try {
        const proyectid = await Project.findById(projectId);
        if (!proyectid) {
            return res.status(404).json({ message: 'Proyecto no encontrado' });
        }
        res.json(proyectid);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar el proyecto' });
    }
};
