import { ProdutoLimpeza } from "../produtolimpeza"; 
import { ProdutoFactory } from "./produtofactory";

export class ProdutoLimpezaFactory extends ProdutoFactory {
  criarProduto(id:number, descricao:string, preco: number, quantidade:number, codigobarras?: string, volumeML?: number, inflamavel?: boolean): ProdutoLimpeza {
    return new ProdutoLimpeza(id, descricao, preco, quantidade, codigobarras, volumeML, inflamavel )
  }
}

