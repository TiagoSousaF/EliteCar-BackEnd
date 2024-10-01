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
}