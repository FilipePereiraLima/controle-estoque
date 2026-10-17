import { ProdutoLimpeza } from "../produtolimpeza";
import { ProdutoLimpezaFactory } from "../factories/limpezafactory";

export class ProdutoLimpezaBuilder {
  private descricao?: string;
  private preco?: number;
  private quantidade?: number;
  private codigobarras?: string;
  private volumeML?: number;
  private inflamavel?: boolean;

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

  comVolumeML(volumeML: number): this {
    this.volumeML = volumeML;
    return this;
  }

  comInflamavel(inflamavel: boolean): this {
    this.inflamavel = inflamavel;
    return this;
  }

  build(): ProdutoLimpeza {
    if (this.descricao === undefined) {
      throw new Error("descricao é obrigatória");
    }
    if (this.preco === undefined) {
      throw new Error("preco é obrigatório");
    }
    if (this.quantidade === undefined) {
      throw new Error("quantidade é obrigatória");
    }

    const factory = new ProdutoLimpezaFactory();
    return factory.criarProduto(
      this.descricao,
      this.preco,
      this.quantidade,
      this.codigobarras,
      this.volumeML,
      this.inflamavel
    );
  }
}
