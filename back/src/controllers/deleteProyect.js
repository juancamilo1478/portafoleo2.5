// controllers/projectController.js
const Project = require('../models/proyects');

module.exports= async (req, res) => {
    const projectId = req.params.id;

    try {
        const deletedProject = await Project.findByIdAndDelete(projectId);
        if (!deletedProject) {
            return res.status(404).json({ message: 'Proyecto no encontrado' });
        }
        res.json({ message: 'Proyecto eliminado exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar el proyecto' });
    }
};
