DROP TABLE IF EXISTS celebs;

CREATE TABLE comedians (
    id serial PRIMARY KEY,
    name varchar(50) NOT NULL,
    age INT,
    status varchar(50) NOT NULL
);

INSERT INTO comedians (name, age, status)
VALUES ('Trevor Noah', 36, 'single'), 
       ('Hasan Minhaj', 35, 'married'), 
       ('Jo Koy', 40 , 'single');

