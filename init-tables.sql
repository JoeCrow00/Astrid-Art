CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(20) UNIQUE NOT NULL,
    description VARCHAR(100),
    price FLOAT,
    category VARCHAR(20),
    image_url VARCHAR(20) UNIQUE,
    active boolean NOT NULL
);


INSERT INTO products(name, description, price, category, image_url, active) VALUES('Pearl Coasters', 'An Astrid Classic. White coasters with gold flakes and edging', 8.00, 'coasters', 'astridwhite2.jpeg', 'true');

INSERT INTO products(name, description, price, category, image_url, active) VALUES('Black Haze Coasters', 'A misty swirl of black, grey and gold', 7.00, 'coasters', 'astridblack1.jpeg', 'true');

INSERT INTO products(name, description, price, category, image_url, active) VALUES('Deep Blue Coasters', 'Astrid classic coaster in deep blue with gold edging', 8.00, 'coasters', 'astriddarkblue2.jpeg', 'true');

INSERT INTO products(name, description, price, category, image_url, active) VALUES('Orange Coasters', 'Astrid classic coaster in rich orange with gold edging', 8.00, 'coasters', 'astridorange2.jpeg', 'true');

INSERT INTO products(name, description, price, category, image_url, active) VALUES('Twilight Sojourn', 'A striking effect with matt colours with silver detail and trim ', 9.00, 'coasters', 'astridgreywhite.jpeg', 'true');

INSERT INTO products(name, description, price, category, image_url, active) VALUES('Archipelago Coasters', 'The ocean is calling with Astrid Archipelago coasters!', 10.00, 'coasters', 'astridocean1.jpeg', 'true');

INSERT INTO products(name, description, price, category, image_url, active) VALUES('Green Coasters', 'Astrid classic coaster in powerful green with gold edging', 8.00, 'coasters', 'astridgreen3.jpeg', 'true');

INSERT INTO products(name, description, price, category, image_url, active) VALUES('Feather Trinket', 'Astrid Feather Trinket Tray', 5.00, 'coasters', 'astridfeather.jpeg', 'true');

INSERT INTO products(name, description, price, category, image_url, active) VALUES('Astrid Soap Dish', 'Astrid Soap Dish. For your washing pleasure', 5.00, 'coasters', 'astridsoap.jpeg', 'true');

INSERT INTO products(name, description, price, category, image_url, active) VALUES('Custom Orders :)', 'Astrid can make you a custom order - just let us know your colour, style and trim colour', 10.00, 'coasters', 'astridcustom.jpeg', 'true');

INSERT INTO products(name, description, price, category, image_url, active) VALUES('active test', 'Astrid can make you a custom ', 3.00, 'coasters', 'astridcustom1.jpeg', 'false');