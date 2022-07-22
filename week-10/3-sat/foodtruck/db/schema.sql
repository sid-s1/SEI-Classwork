-- Food Table
CREATE TABLE IF NOT EXISTS food(
    id serial PRIMARY KEY,
    name text NOT NULL,
    image_url text,
    price_cents integer NOT NULL
);

-- Nutritional Info Table
CREATE TABLE IF NOT EXISTS nutrition(
    id serial PRIMARY KEY,
    name text NOT NULL,
    calories decimal NOT NULL,
    carb decimal NOT NULL,
    protein decimal NOT NULL,
    fat decimal NOT NULL
);

-- Users table
CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY, email TEXT, name TEXT
);

-- Reviews table
CREATE TABLE IF NOT EXISTS reviews(
    id SERIAL PRIMARY KEY, user_id INTEGER REFERENCES users,
    review TEXT, rating INTEGER
);
