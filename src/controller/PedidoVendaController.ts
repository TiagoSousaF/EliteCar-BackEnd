import { Request, Response } from 'express';
import { PedidoVenda } from "../model/PedidoVenda";

// Definindo a classe PedidoVendaController que herda da classe PedidoVenda
class PedidoVendaController extends PedidoVenda {

    // Método estático 'todos' que responde a uma requisição para listar todos os pedidos de venda
    static async todos(req: Request, res: Response) {
        try {
            // Chama o método 'listarPedidos' da classe 'PedidoVenda' para obter a lista de pedidos
            const listaDePedidos = await PedidoVenda.listarPedidos();

            // Retorna a lista de pedidos em formato JSON com o status HTTP 200 (OK)
            res.status(200).json(listaDePedidos);
            // Em caso de erro, exibe uma mensagem no console e retorna um erro 400 (Bad Request) com uma mensagem
        } catch (error) {
            console.log(`Erro ao acessar o método herdado: ${error}`);
            res.status(400).json("Erro ao recuperar as informações");
        }   
    }

}

// Exporta a classe 'PedidoVendaController' para que possa ser utilizada em outras partes do código
export default PedidoVendaController;

