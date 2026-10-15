import { Produto } from "./produto";

export class ProdutoMaterialConstrucao extends Produto {
  constructor(
    id: number,
    descricao: string,
    preco: number,
    quantidade: number,
    cod_barras?: string,
    public unidadeMedida?: "metro" | "peso" | "unidade"
  ) {
    super(id, descricao, preco, quantidade, cod_barras);
  }

  getCategoria(): string {
    return "Material de Construcao";
  }
}