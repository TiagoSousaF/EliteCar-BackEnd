import { Request, Response } from 'express';
import { Carro } from "../model/Carro";

// Definindo a classe CarroController que herda da classe Carro
class CarroController extends Carro {

    // Método estático 'todos' que responde a uma requisição para listar todos os carros
    static async todos(req: Request, res: Response) {
        try {
            // Chama o método 'listarCarros' da classe 'Carro' para obter a lista de carros
            const listaDeCarros = await Carro.listarCarros();

            // Retorna a lista de carros em formato JSON com o status 200 (OK)
            res.status(200).json(listaDeCarros);
                        // Em caso de erro, exibe uma mensagem no console e retorna um erro 400 (Bad Request) com uma mensagem
        } catch (error) {
            console.log(`Erro ao acessar o método herdado: ${error}`);
            res.status(400).json("Erro ao recuperar as informações");
        }   
    }

}

// Exporta a classe 'CarroController' para que possa ser utilizada em outras partes do código
export default CarroController;
