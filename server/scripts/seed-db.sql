-- Тестовые пользователи
INSERT INTO users (email, password_hash, role) VALUES
('admin@marketplace.com', 'hashed_password_1', 'admin'),
('seller1@marketplace.com', 'hashed_password_2', 'seller'),
('customer1@marketplace.com', 'hashed_password_3', 'customer');

-- Тестовые товары
INSERT INTO products (seller_id, name, price, stock) VALUES
(2, 'Ноутбук Pro', 999.99, 10),
(2, 'Смартфон X', 699.99, 25);
