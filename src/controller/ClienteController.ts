import { Request, Response } from 'express';
import { Cliente } from "../model/Cliente";

// Definindo a classe ClienteController que herda da classe Cliente
class ClienteController extends Cliente {

    // Método estático 'todos' que responde a uma requisição para listar todos os clientes
    static async todos(req: Request, res: Response) {
        try {
            // Chama o método 'listarClientes' da classe 'Cliente' para obter a lista de clientes
            const listaDeClientes = await Cliente.listarClientes();

            // Retorna a lista de clientes em formato JSON com o status 200 (OK)
            res.status(200).json(listaDeClientes);
        } catch (error) {
            // Em caso de erro, exibe uma mensagem no console e retorna um erro 400 (Bad Request) com uma mensagem
            console.log(`Erro ao acessar o método herdado: ${error}`);
            res.status(400).json("Erro ao recuperar as informações");
        }   
    }

}

// Exporta a classe 'ClienteController' para que possa ser utilizada em outras partes do código
export default ClienteController;