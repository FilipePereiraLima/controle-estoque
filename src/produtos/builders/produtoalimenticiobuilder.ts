import { ProdutoAlimenticio } from "../produtoalimenticio";
import { ProdutoAlimenticioFactory } from "../factories/alimenticiofactory";

export class ProdutoAlimenticioBuilder {
  private descricao?: string;
  private preco?: number;
  private quantidade?: number;
  private codigobarras?: string;
  private dataValidade?: Date;

  comDescricao(descricao: string): this {
    this.descricao = descricao;
    return this;
  }

  comPreco(preco: number): this {
    this.preco = preco;
    return this;
  }

  comQuantidade(quantidade: number): this {
    this.quantidade = quantidade;
    return this;
  }

  comCodigoBarras(codigobarras: string): this {
    this.codigobarras = codigobarras;
    return this;
  }

  comValidade(dataValidade: Date): this {
    this.dataValidade = dataValidade;
    return this;
  }

  build(): ProdutoAlimenticio {
    if (this.descricao === undefined) {
      throw new Error("descricao é obrigatória");
    }
    if (this.preco === undefined) {
      throw new Error("preco é obrigatório");
    }
    if (this.quantidade === undefined) {
      throw new Error("quantidade é obrigatória");
    }

    const factory = new ProdutoAlimenticioFactory();
    return factory.criarProduto(
      this.descricao,
      this.preco,
      this.quantidade,
      this.codigobarras,
      this.dataValidade
    );
  }
}
