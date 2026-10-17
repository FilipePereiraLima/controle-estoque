import { Produto } from "./produto";

export class ProdutoEletronico extends Produto {
  constructor(
    descricao: string,
    preco: number,
    quantidade: number,
    codigobarras?: string,
    public garantia?: number,
    public voltagem?: string
  ) {
    super(descricao, preco, quantidade, codigobarras);
  }

  getCategoria(): string {
    return "Eletronico";
  }
}