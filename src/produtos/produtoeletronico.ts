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

  clonar(): Produto {
    return new ProdutoEletronico(
      this.descricao,
      this.preco,
      this.quantidade,
      this.codigobarras,
      this.garantia,
      this.voltagem
    );
  }
}