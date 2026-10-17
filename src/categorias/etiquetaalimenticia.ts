import { Etiqueta } from "./etiqueta";
import { Produto } from "../produtos/produto";
import { ProdutoAlimenticio } from "../produtos/produtoalimenticio";

export class EtiquetaAlimenticia implements Etiqueta {
  gerar(produto: Produto): string {
    if (produto instanceof ProdutoAlimenticio) {
      return `${produto.descricao} - R$ ${produto.preco} - Validade: ${produto.dataValidade}`;
    }
    return `${produto.descricao} - R$ ${produto.preco}`;
  }
}
