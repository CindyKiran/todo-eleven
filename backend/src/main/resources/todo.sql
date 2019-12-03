CREATE TABLE taskList(
    id INT NOT NULL AUTO_INCREMENT,
    task VARCHAR(255),
    description VARCHAR(500),
    publishDate DATE,
    deadline DATE,
    priority INT,
    status BOOL,
    PRIMARY KEY(id)
)