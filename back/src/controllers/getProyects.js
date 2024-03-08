const Project = require('../models/proyects');

module.exports = async (req, res) => {
    try {
        let filters={};
        const { category } = req.query;
        if (category) {
            filters.category = category;
        }
        const projects = await Project.find(filters);
        res.json(projects);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving projects' });
    }
};
