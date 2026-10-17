import { ProdutoMaterialConstrucao } from "../produtoconstrucao";
import { ProdutoFactory } from "./produtofactory";

export class ProdutoMaterialConstrucaoFactory extends ProdutoFactory {
  criarProduto(id:number, descricao:string, preco: number, quantidade:number, codigobarras?: string, unidadeMedida?: "metro" | "peso" | "unidade"): ProdutoMaterialConstrucao {
    return new ProdutoMaterialConstrucao(id, descricao, preco, quantidade, codigobarras, unidadeMedida)
  }
}

