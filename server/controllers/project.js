
const projects ={ 'id': 1, 'image': 'url://blabla', 'resume': 'C est un joli Robot hum.. hum..' };

exports.creatProject = (req, res, next) => {
    res.status(200).json()
};

exports.getAllProjects = (req, res, next) => {
    res.status(200).json(projects);
};

exports.getOneProject = (req, res, next) => {
    res.status(200).json(projects[req.params.id]);
};
