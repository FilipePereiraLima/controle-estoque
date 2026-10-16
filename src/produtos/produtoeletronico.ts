import { Produto } from "./produto";

export class ProdutoEletronico extends Produto {
  constructor(
    id: number,
    descricao: string,
    preco: number,
    quantidade: number,
    codigobarras?: string,
    public garantia?: number,
    public voltagem?: string
  ) {
    super(id, descricao, preco, quantidade, codigobarras);
  }

  getCategoria(): string {
    return "Eletronico";
  }
}