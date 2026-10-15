export abstract class Produto {
  constructor(
    public id: number,
    public descricao: string,
    public preco: number,
    public quantidade: number,
    public cod_barras?: string
  ) {}

  abstract getCategoria(): string;
}
