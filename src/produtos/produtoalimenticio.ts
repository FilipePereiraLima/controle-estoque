import { Produto } from "./produto";

export class ProdutoAlimenticio extends Produto {
  constructor(
    id: number,
    descricao: string,
    preco: number,
    quantidade: number,
    public dataValidade?: Date,
    cod_barras?: string
  ) {
    super(id, descricao, preco, quantidade, cod_barras);
  }

  getCategoria(): string {
    return "Alimentício";
  }
}