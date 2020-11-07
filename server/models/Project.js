module.exports = (sequelize, Sequelize) => {
    const Project = sequelize.define('Project', {
        name: {
            type: Sequelize.STRING,
            required: true
        },
        age: {
            type: Sequelize.INTEGER,
            required: true
        }
    });

    return Project;
}
