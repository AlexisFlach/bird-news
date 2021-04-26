CREATE DATABASE birdapp;

CREATE TABLE bird(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    imageUrl VARCHAR(255),
    isSeen BOOLEAN
);

INSERT INTO bird(id, name, imageUrl, isSeen) values(1, 'Parrot', 'https://images.unsplash.com/photo-1549608276-5786777e6587?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80', false);
INSERT INTO bird(id, name, imageUrl, isSeen) values(2, 'Chaffinch', 'https://images.unsplash.com/photo-1493236296276-d17357e28888?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80', false);