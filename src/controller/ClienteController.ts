import { Request, Response } from 'express';
import { Cliente } from "../model/Cliente";

interface ClienteDTO {
    nome: string,
    cpf: string,
    telefone: string
}

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

 /**
    * Método controller para cadastrar um novo cliente.
    * 
    * Esta função recebe uma requisição HTTP contendo os dados de um cliente no corpo da requisição
    * e tenta cadastrar este cliente no banco de dados utilizando a função `cadastroCliente`. Caso o cadastro 
    * seja bem-sucedido, retorna uma resposta HTTP 200 com uma mensagem de sucesso. Caso contrário, retorna
    * uma resposta HTTP 400 com uma mensagem de erro.
    * 
    * @param {Request} req - Objeto de requisição HTTP, contendo o corpo com os dados do cliente no formato `ClienteDTO`.
    * @param {Response} res - Objeto de resposta HTTP usado para retornar o status e a mensagem ao cliente.
    * @returns {Promise<Response>} - Retorna uma resposta HTTP com o status 200 em caso de sucesso, ou 400 em caso de erro.
    * 
    * @throws {Error} - Se ocorrer um erro durante o processo de cadastro, uma mensagem é exibida no console e uma 
    *                   resposta HTTP 400 com uma mensagem de erro é enviada ao cliente.
    */
 static async novo(req: Request, res: Response): Promise<Response> {
    try {
        // recuperando informações do corpo da requisição e colocando em um objeto da interface clienteDTO
        const clienteRecebido: ClienteDTO = req.body;

        // instanciando um objeto do tipo cliente com as informações recebidas
        const novoCliente = new Cliente(clienteRecebido.nome, 
                                    clienteRecebido.cpf,
                                    clienteRecebido.telefone);

        // Chama a função de cadastro passando o objeto como parâmetro
        const repostaClasse = await Cliente.cadastroCliente(novoCliente);

        // verifica a resposta da função
        if(repostaClasse) {
            // retornar uma mensagem de sucesso
            return res.status(200).json({ mensagem: "Cliente cadastrado com sucesso!" });
        } else {
            // retorno uma mensagem de erro
            return res.status(400).json({ mensagem: "Erro ao cadastrar o cliente. Entre em contato com o administrador do sistema."})
        }
        
    } catch (error) {
        // lança uma mensagem de erro no console
        console.log(`Erro ao cadastrar um cliente. ${error}`);

        // retorna uma mensagem de erro há quem chamou a mensagem
        return res.status(400).json({ mensagem: "Não foi possível cadastrar o cliente. Entre em contato com o administrador do sistema." });
    }
}

static async remover(req: Request, res: Response): Promise<Response> {
    try {
        //recuperar o ID do cliente a ser removido
        const IdCliente = parseInt(req.params.idCliente as string);

        //chamar a função do modelo e armazenar a resposta
        const respostaModelo = await Cliente.removerCliente(IdCliente);

        //verifica se a resposta do modelo foi verdadeiro (true)
        if (respostaModelo) {
            //retorna um status 200 c0m uma mensagem de sucesso
            return res.status(200).json({mensagem: "O cliente foi removido com sucesso!"})    
        } else {
            //retorna um status 400 com uma mensagem de erro
            return res.status(400).json({mensagem: "Erro ao remover o cliente. Entre em contato com o administrador do sistema"})
        }
        
    } catch (error) {
        //lança uma mensagem de erro no console
        console.log(`Erro ao remover um cliente. ${error}`);

        //retorna uma mensagem de erro à quem chamou a mensagem
        return res.status(400).json({ mensagem: "Não foi possível remover o carro. Entre em contato com o administrador do sistema." });
    }
}
}

// Exporta a classe 'ClienteController' para que possa ser utilizada em outras partes do código
export default ClienteController;