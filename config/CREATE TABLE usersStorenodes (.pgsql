CREATE TABLE usersStorenodes (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    user_password VARCHAR(100),
    email VARCHAR(255),
    user_role VARCHAR(100)
);


INSERT INTO users (nombre, edad, email) VALUES
    ('Juan', 30, 'juan@example.com'),
    ('María', 25, 'maria@example.com'),
    ('Pedro', 35, 'pedro@example.com');
