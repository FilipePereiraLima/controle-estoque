import { Produto } from "./produto";

export class ProdutoAlimenticio extends Produto {
  constructor(
    descricao: string,
    preco: number,
    quantidade: number,
    public dataValidade?: Date,
    codigobarras?: string
  ) {
    super(descricao, preco, quantidade, codigobarras);
  }

  getCategoria(): string {
    return "Alimentício";
  }
}