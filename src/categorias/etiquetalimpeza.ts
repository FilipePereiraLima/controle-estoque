import { Etiqueta } from "./etiqueta";
import { Produto } from "../produtos/produto";
import { ProdutoLimpeza } from "../produtos/produtolimpeza";

export class EtiquetaLimpeza implements Etiqueta {
  gerar(produto: Produto): string {
    if (produto instanceof ProdutoLimpeza) {
      return `${produto.descricao} - R$ ${produto.preco} - Volume: ${produto.volumeML}ml - Inflamável: ${produto.inflamavel}`;
    }
    return `${produto.descricao} - R$ ${produto.preco}`;
  }
}
