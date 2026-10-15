import { Produto } from "./produto";

export class ProdutoEletronico extends Produto {
  constructor(
    id: number,
    descricao: string,
    preco: number,
    quantidade: number,
    cod_barras?: string,
    public garantia?: number,
    public voltagem?: string
  ) {
    super(id, descricao, preco, quantidade, cod_barras);
  }

  getCategoria(): string {
    return "Eletronico";
  }
}