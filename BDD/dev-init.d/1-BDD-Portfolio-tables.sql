DROP DATABASE IF EXISTS portfolio;
CREATE DATABASE IF NOT EXISTS portfolio;
USE portfolio;

CREATE USER IF NOT EXISTS 'tomwillemin'@'%' IDENTIFIED BY 'tom';
GRANT ALL PRIVILEGES ON portfolio . * TO 'tomSQL'@'%';

----------------------Table Projects----------------------
CREATE TABLE projects (
        id_project SMALLINT NOT NULL AUTO_INCREMENT,
        title_project VARCHAR(255) NOT NULL,
        resume_project VARCHAR(255) NOT NULL,
        picture_project VARCHAR(255) NOT NULL,
        PRIMARY KEY (id_project)
)
Engine = INNODB;
