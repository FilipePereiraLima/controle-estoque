import { Produto } from "../produto";

export abstract class ProdutoFactory {
  abstract criarProduto(
    id: number,
    descricao: string,
    preco: number,
    quantidade: number,
    codigobarras?: string
  ): Produto;
}