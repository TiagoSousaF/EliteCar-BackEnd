import { Request, Response, Router } from "express";
import ClienteController from "./controller/ClienteController";
import {CarroController} from "./controller/CarroController";
import PedidoVendaController from "./controller/PedidoVendaController";

//Cria um roteador
const router = Router();

//Criando uma rota principal para a aplicação
router.get("/", (req: Request, res: Response)=> {
    res.json({ mensagem: "Olá, Mundo!"});
});

// aqui você deve colocar as outras rotas da sua aplicação.

//rotas cliente
router.get('/lista/clientes', ClienteController.todos);
router.post('/novo/cliente', ClienteController.novo);

//rotas carro
router.get('/lista/carros', CarroController.todos);
router.post('/novo/carro', CarroController.novo);

//rotas pedido
router.get('/lista/pedidos', PedidoVendaController.todos);
router.post('/novo/pedido', PedidoVendaController.novo);

//Exportando as rotas
export { router };