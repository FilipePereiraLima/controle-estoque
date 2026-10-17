import { ProdutoEletronico } from "../produtoeletronico";
import { ProdutoFactory } from "./produtofactory";

export class ProdutoEletronicoFactory extends ProdutoFactory {
  criarProduto(id:number, descricao:string, preco: number, quantidade:number, codigobarras?: string, garantia?: number, voltagem?: string): ProdutoEletronico {
    return new ProdutoEletronico(id, descricao, preco, quantidade, codigobarras, garantia, voltagem)
  }
}

