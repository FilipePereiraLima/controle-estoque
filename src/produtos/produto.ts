export abstract class Produto {
  constructor(
    public id: number,
    public descricao: string,
    public preco: number,
    public quantidade: number,
    public codigobarras?: string
  ) {}

  abstract getCategoria(): string;
}
