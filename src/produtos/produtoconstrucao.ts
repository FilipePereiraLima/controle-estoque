import { Produto } from "./produto";

export class ProdutoMaterialConstrucao extends Produto {
  constructor(
    id: number,
    descricao: string,
    preco: number,
    quantidade: number,
    codigobarras?: string,
    public unidadeMedida?: "metro" | "peso" | "unidade"
  ) {
    super(id, descricao, preco, quantidade, codigobarras);
  }

  getCategoria(): string {
    return "Material de Construcao";
  }
}