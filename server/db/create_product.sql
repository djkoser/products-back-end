INSERT INTO product
(name,description,price,image_url)
VALUES
($1, $2, $3, $4)
RETURNING product_id, name, description, price, image_url; 