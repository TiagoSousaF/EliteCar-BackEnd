import express from "express";
import cors from "cors";
import { DatabaseModel } from './model/DatabaseModel';
import { Cliente } from "./model/Cliente";
import ClienteController from "./controller/ClienteController";
import CarroController from "./controller/CarroController";
import { Carro } from "./model/Carro";
import PedidoVendaController from "./controller/PedidoVendaController";
import { PedidoVenda } from "./model/PedidoVenda";

const port: number = 3333;

const server = express();
server.use(cors());
server.use(express.json());

server.get('/clientes', ClienteController.todos);

server.get('/clientes', async (req, res) => {
    const clientes = await Cliente.listarClientes();
    res.json(clientes);
});

server.get('/carros', CarroController.todos);

server.get('/carros', async (req, res) => {
    const carros = await Carro.listarCarros();
    res.json(carros);
});

server.get('/pedidos', PedidoVendaController.todos);

server.get('/pedidos', async (req, res) => {
    const pedidos = await PedidoVenda.listarPedidos();
    res.json(pedidos);
});

new DatabaseModel().testeConexao().then((resdb) =>{
    if(resdb) {
        console.log("Conexão com banco de dados realizada com sucesso!");
        //iniciando o servidor
        server.listen(port, () => {
            console.log(`Servidor iniciado no endereço http://localhost:${port}`);
});
    } else {
        console.log("Erro ao conectar com o banco de dados");
    }
})
