SELECT 'CREATE DATABASE foodtruck_two' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'foodtruck_two') \gexec

\c foodtruck_two

-- DROP TABLE IF EXISTS food;

-- CREATE TABLE food (
--   id serial PRIMARY KEY,
--   name varchar(50) NOT NULL,
--   image_url text,
--   price_in_cents int NOT NULL
-- );

-- INSERT INTO food (name, image_url, price_in_cents) values
-- ('Taco', 'https://media.istockphoto.com/photos/tacos-with-shrimp-picture-id1155692443?k=20&m=1155692443&s=612x612&w=0&h=OHM27sz8vf55jWU79IpQBv4kQMueD1ZkIKyFF1YyR2Q=', 900),
-- ('Burger', 'https://media.istockphoto.com/photos/cheeseburger-picture-id520410807?k=20&m=520410807&s=612x612&w=0&h=L9NnW1pyUccZmk9MUQetR6avZvm_K3JysVMry1paH0c=', 1600),
-- ('Sanwich', 'https://media.istockphoto.com/photos/turkey-sandwich-picture-id157431311?k=20&m=157431311&s=612x612&w=0&h=h2BtVkKkzRwFeDZFezLtE5xwa8zi0Ix_vfdFXrGaz6k=', 1250);



CREATE TABLE IF NOT EXISTS users(id SERIAL PRIMARY KEY,email TEXT,name TEXT);