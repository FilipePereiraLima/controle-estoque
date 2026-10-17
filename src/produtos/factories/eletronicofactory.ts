import { ProdutoEletronico } from "../produtoeletronico";
import { ProdutoFactory } from "./produtofactory";

export class ProdutoEletronicoFactory extends ProdutoFactory {
  criarProduto(descricao:string, preco: number, quantidade:number, codigobarras?: string, garantia?: number, voltagem?: string): ProdutoEletronico {
    return new ProdutoEletronico(descricao, preco, quantidade, codigobarras, garantia, voltagem)
  }
}

