import { ProdutoLimpeza } from "../produtolimpeza"; 
import { ProdutoFactory } from "./produtofactory";

export class ProdutoLimpezaFactory extends ProdutoFactory {
  criarProduto(descricao:string, preco: number, quantidade:number, codigobarras?: string, volumeML?: number, inflamavel?: boolean): ProdutoLimpeza {
    return new ProdutoLimpeza(descricao, preco, quantidade, codigobarras, volumeML, inflamavel )
  }
}

