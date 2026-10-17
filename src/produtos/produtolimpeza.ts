import { Produto } from "./produto";

export class ProdutoLimpeza extends Produto {
  constructor(
    descricao: string,
    preco: number,
    quantidade: number,
    codigobarras?: string,
    public volumeML?: number,
    public inflamavel?: boolean
  ) {
    super(descricao, preco, quantidade, codigobarras);
  }

  getCategoria(): string {
    return "Limpeza";
  }
}