import { ProdutoMaterialConstrucao } from "../produtoconstrucao";
import { ProdutoFactory } from "./produtofactory";

export class ProdutoMaterialConstrucaoFactory extends ProdutoFactory {
  criarProduto(descricao:string, preco: number, quantidade:number, codigobarras?: string, unidadeMedida?: "metro" | "peso" | "unidade"): ProdutoMaterialConstrucao {
    return new ProdutoMaterialConstrucao(descricao, preco, quantidade, codigobarras, unidadeMedida)
  }
}

