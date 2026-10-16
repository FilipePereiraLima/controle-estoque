import { Produto } from "./produto";

export class ProdutoAlimenticio extends Produto {
  constructor(
    id: number,
    descricao: string,
    preco: number,
    quantidade: number,
    public dataValidade?: Date,
    codigobarras?: string
  ) {
    super(id, descricao, preco, quantidade, codigobarras);
  }

  getCategoria(): string {
    return "Alimentício";
  }
}