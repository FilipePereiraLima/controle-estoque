import { Produto } from "../produto";

export abstract class ProdutoFactory {
  abstract criarProduto(
    descricao: string,
    preco: number,
    quantidade: number,
    codigobarras?: string
  ): Produto;
}