import { Produto } from "./produto";

export class ProdutoLimpeza extends Produto {
  constructor(
    id: number,
    descricao: string,
    preco: number,
    quantidade: number,
    codigobarras?: string,
    public volumeML?: number,
    public inflamavel?: boolean
  ) {
    super(id, descricao, preco, quantidade, codigobarras);
  }

  getCategoria(): string {
    return "Limpeza";
  }
}