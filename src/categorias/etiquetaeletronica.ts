import { Etiqueta } from "./etiqueta";
import { Produto } from "../produtos/produto";
import { ProdutoEletronico } from "../produtos/produtoeletronico";

export class EtiquetaEletronica implements Etiqueta {
  gerar(produto: Produto): string {
    if (produto instanceof ProdutoEletronico) {
      return `${produto.descricao} - R$ ${produto.preco.toFixed(2)} - Garantia: ${produto.garantia} meses - Voltagem: ${produto.voltagem}`;
    }
    return `${produto.descricao} - R$ ${produto.preco.toFixed(2)}`;
  }
}
