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