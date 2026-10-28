import { Estoque } from "./estoque";
import { Produto } from "../produtos/produto";
import { ProdutoAlimenticioBuilder } from "../produtos/builders/produtoalimenticiobuilder";
import { ProdutoEletronicoBuilder } from "../produtos/builders/produtoeletronicobuilder";

export class EstoqueFacade {
  private estoque = Estoque.getInstance();

  cadastrarAlimenticio(descricao: string, preco: number, quantidade: number): number {
    const produto = new ProdutoAlimenticioBuilder()
      .comDescricao(descricao)
      .comPreco(preco)
      .comQuantidade(quantidade)
      .build();
    return this.estoque.adicionar(produto);
  }

  cadastrarEletronico(descricao: string, preco: number, quantidade: number, voltagem: string): number {
    const produto = new ProdutoEletronicoBuilder()
      .comDescricao(descricao)
      .comPreco(preco)
      .comQuantidade(quantidade)
      .comVoltagem(voltagem)
      .build();
    return this.estoque.adicionar(produto);
  }

  clonar(id: number): number | undefined {
    const original = this.estoque.buscarPorId(id);
    if (!original) return undefined;
    return this.estoque.adicionar(original.clonar());
  }

  listar(): Produto[] {
    return this.estoque.listar();
  }
}
