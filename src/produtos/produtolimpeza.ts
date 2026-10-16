import { Produto } from "./produto";

export class ProdutoLimpeza extends Produto {
  constructor(
    id: number,
    descricao: string,
    preco: number,
    quantidade: number,
    cod_barras?: string,
    public volumeML?: number,
    public inflamavel?: boolean
  ) {
    super(id, descricao, preco, quantidade, cod_barras);
  }

  getCategoria(): string {
    return "Limpeza";
  }
}