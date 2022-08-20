-- create challenges
-- id
-- name
-- description
-- address (where each challenge is)
CREATE TABLE challenges (
    id SERIAL PRIMARY KEY,
    name TEXT,
    description TEXT,
    address TEXT
);