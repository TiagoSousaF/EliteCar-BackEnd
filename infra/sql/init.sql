CREATE DATABASE elitecar;

CREATE TABLE carro (
	id_carro SERIAL PRIMARY KEY,
	marca VARCHAR(50) NOT NULL,
	modelo VARCHAR(50) NOT NULL,
	ano INT,
	cor VARCHAR(20)
);

CREATE TABLE cliente (
	id_cliente SERIAL PRIMARY KEY,
	nome VARCHAR(50) NOT NULL,
	cpf VARCHAR(11) UNIQUE NOT NULL,
	telefone VARCHAR(16)
);

CREATE TABLE pedido_venda (
	id_pedido SERIAL PRIMARY KEY,
	id_cliente INT NOT NULL,
	id_carro INT NOT NULL,
	data_pedido DATE NOT NULL,
	valor_pedido DECIMAL(6) NOT NULL,
	FOREIGN KEY (id_cliente) REFERENCES cliente (id_cliente),
	FOREIGN KEY (id_carro) REFERENCES carro (id_carro)
);

INSERT INTO carro (marca, modelo, ano, cor) VALUES
    ('Toyota', 'Corolla', 2020, 'Prata'),
    ('Honda', 'Civic', 2019, 'Preto'),
    ('Ford', 'Mustang', 2021, 'Vermelho'),
    ('Chevrolet', 'Onix', 2018, 'Branco'),
    ('Volkswagen', 'Golf', 2022, 'Azul');

INSERT INTO cliente (nome, cpf, telefone) VALUES
    ('João Silva', '12345678901', '(11) 91234-5678'),
    ('Maria Oliveira', '23456789012', '(21) 99876-5432'),
    ('Carlos Souza', '34567890123', '(31) 98765-4321'),
    ('Ana Costa', '45678901234', '(41) 97654-3210'),
    ('Paulo Mendes', '56789012345', '(51) 96543-2109');

    INSERT INTO pedido_venda (id_cliente, id_carro, data_pedido, valor_pedido) VALUES
    (1, 2, '2023-09-15', 55000.00),
    (2, 4, '2023-09-17', 45000.00),
    (3, 1, '2023-09-20', 65000.00),
    (4, 3, '2023-09-22', 80000.00),
    (5, 5, '2023-09-25', 70000.00);
    