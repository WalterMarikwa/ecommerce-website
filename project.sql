DROP DATABASE IF EXISTS db_schema;

-- Creating a database for tables.
CREATE DATABASE db_schema;
USE db_schema;

-- Creating a table for contacts.
CREATE TABLE contacts (
contact_id INT NOT NULL AUTO_INCREMENT, 
firstName VARCHAR(100) NOT NULL, 
lastName VARCHAR(100) NOT NULL, 
email VARCHAR(100) NOT NULL,
adress VARCHAR(100) NOT NULL,
PRIMARY KEY (contact_id)
);

-- Inserting attributes into the products table.
INSERT INTO contacts (firstName,lastName,email,adress) 
VALUES 
('Mitchel', 'Saylor', 'MitchelSaylor@gmail.com', '97 Hillside St, Framingham, MA'),
('Rubin', 'Ortegon', 'RubinOrtegon@gmail.com', '7241 Water Circle, Newton, NJ'),
('Argelia', 'Quick', 'ArgeliaQuick@gmail.com', '672 Arch Street Massillon, OH'),
('Lorita', 'Shippee', 'LoritaShippee@gmail.com', '7968 S. Studebaker, Ave Parlin, NJ'),
('Stefany', 'Maker', 'StefanyMaker@yahoo.com', '768 SW. Cottage Rd, Moncks Corner, SC'),
('Jerrold', 'Saiki', 'JerroldSaiki@yahoo.com', '8926 Richardson Lane, Burbank, IL'),
('Tammara', 'Hunnicutt', 'TammaraHunnicutt@yahoo.com', '77 Green Dr, Snellville, GA'),
('Deonna', 'Valle', 'DeonnaValle@gmail.com', '9374 Bellevue Rd, Pensacola, FL'),
('Nella', 'Schwab', 'NellaSchwab@yahoo.com', '86 Selby Drive, Springfield, PA'),
('Marilee', 'Burell', 'MarileeBurell@gmail.com', '644 Lees Creek Drive, Glendale, AZ');


-- Creating a table for products.
CREATE TABLE products (
product_id INT NOT NULL AUTO_INCREMENT,
product_type VARCHAR(100) NOT NULL,
category VARCHAR(100) NOT NULL,
stock_quantity INT(10) NOT NULL,
available BOOLEAN NOT NULL,
PRIMARY KEY (product_id)
);

-- Inserting attributes into the products table.
INSERT INTO products (product_type,category,stock_quantity,available)
VALUES
('Bass Guitar', 'Guitar', 20, True),
('Semi Acoustic Guitar', 'Guitar', 15, True),
('Electric Guitar', 'Guitar', 35, True),
('Pioneer Dj Set', 'Dj', 59, True),
('Party Mix Dj', 'Dj', 80, True),
('Hercules mix Dj', 'Dj', 60, True),
('Black Beats', 'Headphones', 76, True),
('White Beats', 'Headphones', 100, True),
('Rave Beats', 'Headphones', 120, True),
('Key Board(Others)', 'Others', 40, True),
('Drums2.0(Others)', 'Others', 90, True),
('Violin(Others)', 'Others', 45, True);

-- Adding a description column on the product table.
ALTER TABLE products
ADD COLUMN description_type VARCHAR(255) NOT NULL;

ALTER TABLE products
ADD COLUMN image VARCHAR(255) NOT NULL;

-- Updating an image url column into the product table.
UPDATE `products` PRO
SET PRO.`image` = 'https://bit.ly/2H19RSD'
WHERE PRO.`product_id` = 1;

UPDATE `products` PRO
SET PRO.`image` = 'https://bit.ly/2OBW2jx'
WHERE PRO.`product_id` = 2;

UPDATE `products` PRO
SET PRO.`image` = 'https://bit.ly/2N7Un3b'
WHERE PRO.`product_id` = 3;

UPDATE `products` PRO
SET PRO.`image` = 'https://bit.ly/2OJUy6Y'
WHERE PRO.`product_id` = 4;

UPDATE `products` PRO
SET PRO.`image` = 'https://bit.ly/2MkA5n9'
WHERE PRO.`product_id` = 5;

UPDATE `products` PRO
SET PRO.`image` = 'https://bit.ly/2Z0Dutj'
WHERE PRO.`product_id` = 6;

UPDATE `products` PRO
SET PRO.`image` = 'https://bit.ly/31HAiVp'
WHERE PRO.`product_id` = 7;

UPDATE `products` PRO
SET PRO.`image` = 'https://bit.ly/2YQCTza'
WHERE PRO.`product_id` = 8;

UPDATE `products` PRO
SET PRO.`image` = 'https://bit.ly/31wcTpM'
WHERE PRO.`product_id` = 9;

UPDATE `products` PRO
SET PRO.`image` = 'https://bit.ly/2KweJBc'
WHERE PRO.`product_id` = 10;

UPDATE `products` PRO
SET PRO.`image` = 'https://bit.ly/2GNmH6X'
WHERE PRO.`product_id` = 11;

UPDATE `products` PRO
SET PRO.`image` = 'https://bit.ly/2MzHYEO'
WHERE PRO.`product_id` = 12;

-- Updating a description column with values on the products table.
UPDATE `products` PRO
SET PRO.`description_type` = 'The bass guitar is a plucked string instrument.'
WHERE PRO.`product_id` = 1;

UPDATE `products` PRO
SET PRO.`description_type` = 'The semi-acoustic is a plucked string instrument.'
WHERE PRO.`product_id` = 2;

UPDATE `products` PRO
SET PRO.`description_type` = 'The electric guitar is a plucked string instrument.'
WHERE PRO.`product_id` = 3;

UPDATE `products` PRO
SET PRO.`description_type` = 'Consoles used in sound reinforcement systems and sound recording.'
WHERE PRO.`product_id` = 4;

UPDATE `products` PRO
SET PRO.`description_type` = 'Consoles used in sound reinforcement systems and sound recording.'
WHERE PRO.`product_id` = 5;

UPDATE `products` PRO
SET PRO.`description_type` = 'Consoles used in sound reinforcement systems and sound recording.'
WHERE PRO.`product_id` = 6;

UPDATE `products` PRO
SET PRO.`description_type` = 'Speakers that can be worn in or around your ears.'
WHERE PRO.`product_id` = 7;

UPDATE `products` PRO
SET PRO.`description_type` = 'Speakers that can be worn in or around your ears.'
WHERE PRO.`product_id` = 8;

UPDATE `products` PRO
SET PRO.`description_type` = 'Speakers that can be worn in or around your ears.'
WHERE PRO.`product_id` = 9;

UPDATE `products` PRO
SET PRO.`description_type` = 'A musical instrument played using a keyboard, a row of levers.'
WHERE PRO.`product_id` = 10;

UPDATE `products` PRO
SET PRO.`description_type` = 'A musical instrument which produces sound by the vibration.'
WHERE PRO.`product_id` = 11;

UPDATE `products` PRO
SET PRO.`description_type` = 'A wooden string instrument in with a very soothing sound.'
WHERE PRO.`product_id` = 12;

-- Creating a table for price.
CREATE TABLE price (
price_id INT NOT NULL AUTO_INCREMENT,
item_price DECIMAL(10,2) NOT NULL,
price_date DATE NOT NULL,
PRIMARY KEY (price_id)
);

-- Inserting attributes into the price table.
INSERT INTO price (item_price,price_date)
VALUES
(1755.00, '2019-07-12'),
(1279.00, '2019-01-11'),
(1342.00, '2019-12-01'),
(3000.00, '2019-09-04'),
(2387.00, '2019-05-05'),
(2500.00, '2019-08-04'),
(120.00, '2019-08-07'),
(300.00, '2020-03-02'),
(175.00, '2019-11-03'),
(175.00, '2019-02-06'),
(175.00, '2020-12-03'),
(175.00, '2019-02-10');

-- Showing tables from my database.
SELECT * FROM contacts;
SELECT * FROM products;
SELECT * FROM price;