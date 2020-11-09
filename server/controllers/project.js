require('../config/db.config.js');

exports.create = (req, res, next) => {
    // check token
    const content = [[req.body.title_project],[req.body.picture_project],[req.body.resume_project]]
    db.query('INSERT INTO projects (id_project,title_project,picture_project,resume_project) VALUES (NULL,?,?,?)',content, (error, rows) => {
        if(error){
            res.status(400).json({sucess: false, error});
        } else {
            res.status(200).json({response: rows[0],sucess: true});
        }
    });
};

exports.getAll = (req, res, next) => {
    db.query('SELECT * FROM projects', function(err, rows,) {
        if(err){
            res.status(400).json({sucess: false, err});
        } else {
            res.status(200).json({response: rows, sucess: true});
        }
    });
};

exports.getOne = (req, res, next) => {
    db.query('SELECT * FROM projects WHERE id_project=?', req.params.id, function(err, rows,) {
        if(err){
            res.status(404).json({err, sucess: false});
        } else if(rows[0] === undefined) {
            res.status(404).json({response: 'Content is empty', sucess: false});
        } else {
            res.status(200).json({response: rows, sucess: true});
        }
    });
};
