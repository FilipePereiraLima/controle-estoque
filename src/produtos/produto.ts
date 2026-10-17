export abstract class Produto {
  id?: number
  constructor(
    public descricao: string,
    public preco: number,
    public quantidade: number,
    public codigobarras?: string
  ) {}

  abstract getCategoria(): string;
  abstract clonar(): Produto;
}
