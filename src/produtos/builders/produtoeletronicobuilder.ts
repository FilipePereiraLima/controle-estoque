import { ProdutoEletronico } from "../produtoeletronico";
import { ProdutoEletronicoFactory } from "../factories/eletronicofactory";

export class ProdutoEletronicoBuilder {
  private descricao?: string;
  private preco?: number;
  private quantidade?: number;
  private codigobarras?: string;
  private garantia?: number;
  private voltagem?: string;

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

  comGarantia(garantia: number): this {
    this.garantia = garantia;
    return this;
  }

  comVoltagem(voltagem: string): this {
    this.voltagem = voltagem;
    return this;
  }

  build(): ProdutoEletronico {
    if (this.descricao === undefined) {
      throw new Error("descricao é obrigatória");
    }
    if (this.preco === undefined) {
      throw new Error("preco é obrigatório");
    }
    if (this.quantidade === undefined) {
      throw new Error("quantidade é obrigatória");
    }

    const factory = new ProdutoEletronicoFactory();
    return factory.criarProduto(
      this.descricao,
      this.preco,
      this.quantidade,
      this.codigobarras,
      this.garantia,
      this.voltagem
    );
  }
}
