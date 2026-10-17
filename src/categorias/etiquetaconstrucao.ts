import { Etiqueta } from "./etiqueta";
import { Produto } from "../produtos/produto";
import { ProdutoMaterialConstrucao } from "../produtos/produtoconstrucao";

export class EtiquetaConstrucao implements Etiqueta {
  gerar(produto: Produto): string {
    if (produto instanceof ProdutoMaterialConstrucao) {
      return `${produto.descricao} - R$ ${produto.preco} - Unidade: ${produto.unidadeMedida}`;
    }
    return `${produto.descricao} - R$ ${produto.preco}`;
  }
}
