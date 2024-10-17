import { Request, Response, Router } from "express";
import ClienteController from "./controller/ClienteController";
import CarroController from "./controller/CarroController";
import PedidoVendaController from "./controller/PedidoVendaController";

//Cria um roteador
const router = Router();

//Criando uma rota principal para a aplicação
router.get("/", (req: Request, res: Response)=> {
    res.json({ mensagem: "Olá, Mundo!"});
});

// aqui você deve colocar as outras rotas da sua aplicação.
router.get('/lista/clientes', ClienteController.todos);

router.get('/lista/carros', CarroController.todos);

router.get('/lista/pedidos', PedidoVendaController.todos);


//Exportando as rotas
export { router };