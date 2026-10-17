import { Produto } from "../produtos/produto";

export class Estoque {
  private static instancia: Estoque;
  private produtos: Produto[] = [];
  private contador: number = 0;

  private constructor() {}

  static getInstance(): Estoque {
    if (!Estoque.instancia) {
      Estoque.instancia = new Estoque();
    }
    return Estoque.instancia;
  }

  adicionar(produto: Produto): number {
    this.contador++;
    produto.id = this.contador;
    this.produtos.push(produto);
    return produto.id;
  }

  listar(): Produto[] {
    return [...this.produtos];
  }
  
  buscarPorId(id: number): Produto | undefined {
    return this.produtos.find((p) => p.id === id);
  }

  excluir(id: number): boolean {
    const index = this.produtos.findIndex((p) => p.id === id);
    if (index === -1) {
      return false;
    }
    this.produtos.splice(index, 1);
    return true;
  }

}
