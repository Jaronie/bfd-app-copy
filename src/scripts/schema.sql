DROP TABLE IF EXISTS products;

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    productName VARCHAR(255),
    productDesc VARCHAR(1000),
    productType VARCHAR(50),
    producePrice DECIMAL(10, 2),
    image_url VARCHAR(255)
);