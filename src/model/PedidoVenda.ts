import { DatabaseModel } from "./DatabaseModel";

const database = new DatabaseModel().pool;

/**
 * Classe que representa um carro.
 */
export class Carro {

    /* Atributos */
    /* Identificador do carro */
    private idCarro: number = 0;
    /* marca do carro */
    private marca: string;
    /* modelo do carro */
    private modelo: string;
    /* ano de fabrição do carro */
    private ano: number;
    /* cor do carro */
    private cor: string;

    /**
     * Construtor da classe Carro
     * 
     * @param marca Marca do carro
     * @param modelo Modelo do carro
     * @param ano Ano de fabricação do carro
     * @param cor Cor do carro
     */
    constructor(
        marca: string,
        modelo: string,
        ano: number,
        cor: string
    ) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }

    /* Métodos get e set */
    /**
     * Recupera o identificador do carro
     * @returns o identificador do carro
     */
    public getIdCarro(): number {
        return this.idCarro;
    }

    /**
     * Atribui um valor ao identificador do carro
     * @param idCarro novo identificado do carro
     */
    public setIdCarro(idCarro: number): void {
        this.idCarro = idCarro;
    }

    /**
     * Retorna a marca do carro.
     *
     * @returns {string} A marca do carro.
     */
    public getMarca(): string {
        return this.marca;
    }

    /**
     * Define a marca do carro.
     * 
     * @param marca - A marca do carro a ser definida.
     */
    public setMarca(marca: string): void {
        this.marca = marca;
    }

    /**
     * Retorna o modelo do carro.
     *
     * @returns {string} O modelo do carro.
     */
    public getModelo(): string {
        return this.modelo;
    }

    /**
     * Define o modelo do carro.
     *
     * @param modelo - O nome do modelo do carro.
     */
    public setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    /**
     * Retorna o ano do carro.
     *
     * @returns O ano do carro.
     */
    public getAno(): number {
        return this.ano;
    }

    /**
     * Define o ano do carro.
     * 
     * @param ano - O ano a ser definido para o carro.
     */
    public setAno(ano: number): void {
        this.ano = ano;
    }

    /**
     * Retorna a cor do carro.
     *
     * @returns {string} A cor do carro.
     */
    public getCor(): string {
        return this.cor;
    }

    /**
     * Define a cor do carro.
     * 
     * @param cor - A nova cor do carro.
     */
    public setCor(cor: string): void {
        this.cor = cor;
    }

    //MÉTODO PARA ACESSAR O BANCO DE DADOS
    //CRUD create - READ - update - delete
    static async listarCarros(): Promise<Array<Carro> | null> {
        //Criando lista vazia para armazenar as pessoas
        let listaDeCarros: Array<Carro> = [];

        try {
            // Query para conslta no banco de dados
            const querySelectCliente = `SELECT * FROM carro;`;

            // Executa a query no banco de dados
            const respostaBD = await database.query(querySelectCliente);

            respostaBD.rows.forEach((carro) => {
                let novoCarro = new Carro(
                    carro.marca,
                    carro.modelo,
                    carro.ano,
                    carro.cor
                );
                //Adicionando o ID ao objeto
                novoCarro.setIdCarro(carro.id);

                //Adicionando a pessoa na lista
                listaDeCarros.push(novoCarro);
            });

            //Retornando a lista de cliente para quem chamou a função
            return listaDeCarros;
        } catch (error) {
            console.log(`Erro ao acessar o modelo: ${error}`);
            return null;
        }
    }

}

/**
 * Classe que representa um pedido de venda.
 */
export class PedidoVenda {

    /* Atributos */
    /* Identificador do pedido */
    private idPedido: number = 0;
    /* Identificador do carro */
    private idCarro: number;
    /* modelo do carro */
    private idCliente: number;
    /* ano de fabrição do carro */
    private dataPedido: Date;
    /* cor do carro */
    private valorPedido: number;

    /**
     * Construtor da classe Carro
     * 
     * @param dataPedido 
     * @param valorPedido Cor do carro
     */
    constructor(
        idCarro: number,
        idCliente: number,
        dataPedido: Date,
        valorPedido: number,
    ) {
        this.idCarro = idCarro;
        this.idCliente = idCliente;   
        this.dataPedido = dataPedido;
        this.valorPedido = valorPedido;
    }

    /* Métodos get e set */
    /**
     * Recupera o identificador do pedido
     * @returns o identificador do pedido
     */
    public getIdPedido(): number {
        return this.idPedido;
    }

    /**
     * Atribui um valor ao identificador do pedido
     * @param idPedido novo identificado do pedido
     */
    public setIdPedido(idPedido: number): void {
        this.idPedido = idPedido;
    }

    /**
     * Retorna o identificador do carro.
     *
     * @returns {number} O identificador do carro do carro.
     */
    public getIdCarro(): number {
        return this.idCarro;
    }

    /**
     * Define a identificador do carro.
     * 
     * @param idCarro - O identificador do carro a ser definido.
     */
    public setIdCarro(idCarro: number): void {
        this.idCarro = idCarro;
    }

    /**
     * Retorna o identificador do cliente.
     *
     * @returns {number} O identificador do cliente.
     */
    public getIdCliente(): number {
        return this.idCliente;
    }

    /**
     * Define o identificador do cliente.
     * 
     * @param idCliente - O identificador do cliente a ser definido.
     */
    public setIdCliente(idCliente: number): void {
        this.idCliente = idCliente;
    }

    /**
     * Retorna a data do pedido.
     *
     * @returns {Date} A data do pedido.
     */
    public getDataPedido(): Date {
        return this.dataPedido;
    }

    /**
     * Define a data do pedido.
     * 
     * @param dataPedido - A data do pedido a ser definida.
     */
    public setDataPedido(dataPedido: Date): void {
        this.dataPedido = dataPedido;
    }

    /**
     * Retorna o valor do pedido.
     *
     * @returns {number} O valor do pedido.
     */
    public getValorPedido(): number {
        return this.valorPedido;
    }

    /**
     * Define o valor do pedido.
     * 
     * @param valorPedido - O valor do pedido a ser definido.
     */
    public setValorPedido(valorPedido: number): void {
        this.valorPedido = valorPedido;
}

//MÉTODO PARA ACESSAR O BANCO DE DADOS
    //CRUD create - READ - update - delete
    static async listarPedidos(): Promise<Array<PedidoVenda> | null> {
        //Criando lista vazia para armazenar os pedidos
        let listaDePedidos: Array<PedidoVenda> = [];

        try {
            // Query para conslta no banco de dados
            const querySelectCliente = `SELECT * FROM pedido_venda;`;

            // Executa a query no banco de dados
            const respostaBD = await database.query(querySelectCliente);

            respostaBD.rows.forEach((pedido) => {
                let novoPedido = new PedidoVenda(
                    pedido.id_carro,
                    pedido.id_cliente,
                    pedido.data_pedido,
                    pedido.valor_pedido
                );
                //Adicionando o ID ao objeto
                novoPedido.setIdPedido(pedido.id_pedido);

                //Adicionando o pedido na lista
                listaDePedidos.push(novoPedido);
            });

            //Retornando a lista de pedidos para quem chamou a função
            return listaDePedidos;
        } catch (error) {
            console.log(`Erro ao acessar o modelo: ${error}`);
            return null;
        }
    }

}