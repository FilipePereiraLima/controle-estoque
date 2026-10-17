import { ProdutoMaterialConstrucao } from "../produtoconstrucao";
import { ProdutoMaterialConstrucaoFactory } from "../factories/construcaofactory";

export class ProdutoConstrucaoBuilder {
  private descricao?: string;
  private preco?: number;
  private quantidade?: number;
  private codigobarras?: string;
  private unidadeMedida?: "metro" | "peso" | "unidade";

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

  comUnidadeMedida(unidadeMedida: "metro" | "peso" | "unidade"): this {
    this.unidadeMedida = unidadeMedida;
    return this;
  }

  build(): ProdutoMaterialConstrucao {
    if (this.descricao === undefined) {
      throw new Error("descricao é obrigatória");
    }
    if (this.preco === undefined) {
      throw new Error("preco é obrigatório");
    }
    if (this.quantidade === undefined) {
      throw new Error("quantidade é obrigatória");
    }

    const factory = new ProdutoMaterialConstrucaoFactory();
    return factory.criarProduto(
      this.descricao,
      this.preco,
      this.quantidade,
      this.codigobarras,
      this.unidadeMedida
    );
  }
}
