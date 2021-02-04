require('../config/db.config.js');

exports.create = (req, res, next) => {
    // check token
    const project = JSON.parse(req.body.project)
    const imageMain = `${req.protocol}://${req.get('host')}/modules/pictures/${req.files[0].filename}`;
    console.log(project);
    const content = [project.titleProject,project.resumeProject,imageMain]
    db.query('INSERT INTO projects (id_project,title_project,resume_project,picture_project) VALUES (NULL,?,?,?)',content, (err, rows) => {
        if(err){
            res.status(400).json({ sucess: false, err });
            console.log(err);
        } else {
            res.status(200).json({ sucess: true, response: rows[0] });
        }
    });
};

exports.getAll = (req, res, next) => {
    db.query('SELECT * FROM projects', function(err, rows,) {
        if(err){
            res.status(400).json({ sucess: false, err });
            console.log(err)
        } else {
            res.status(200).json({ sucess: true, response: rows });
        }
    });
};

exports.getOne = (req, res, next) => {
    db.query('SELECT * FROM projects WHERE id_project=?', req.params.id, function(err, rows,) {
        if(err){
            res.status(404).json({ sucess: false, err });
            console.log(err)
        } else if(rows[0] === undefined) {
            res.status(404).json({ sucess: false, response: 'Content is empty' });
        } else {
            res.status(200).json({ sucess: true, response: rows });
        }
    });
};
