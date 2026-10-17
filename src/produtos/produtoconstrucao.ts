import { Produto } from "./produto";

export class ProdutoMaterialConstrucao extends Produto {
  constructor(
    descricao: string,
    preco: number,
    quantidade: number,
    codigobarras?: string,
    public unidadeMedida?: "metro" | "peso" | "unidade"
  ) {
    super(descricao, preco, quantidade, codigobarras);
  }

  getCategoria(): string {
    return "Material de Construcao";
  }
}