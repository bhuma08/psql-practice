DROP TABLE IF EXISTS shows;

CREATE TABLE shows (
    id serial PRIMARY KEY,
    title varchar(255) NOT NULL,
    genre varchar(255) NOT NULL,
    episodes int NOT NULL
);

INSERT INTO shows (title, genre, episodes)
VALUES ('friends', 'comedy', 500), ('derry girls', 'comedy', 12), ('peaky blinders', 'crime, drama', 30);

