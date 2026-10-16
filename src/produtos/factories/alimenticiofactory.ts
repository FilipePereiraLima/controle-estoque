import { ProdutoAlimenticio } from "../produtoalimenticio";
import { ProdutoFactory } from "./produtofactory";

export class ProdutoAlimenticioFactory extends ProdutoFactory {
  criarProduto(id:number, descricao:string, preco: number, quantidade:number, codigobarras?: string, dataValidade?:Date): ProdutoAlimenticio {
    if (dataValidade == null){
        dataValidade = new Date()
        dataValidade.setDate(dataValidade.getDate()+7)
    }return new ProdutoAlimenticio(id, descricao, preco, quantidade, dataValidade, codigobarras)
  }
}
