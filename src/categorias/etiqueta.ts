import { Produto } from "../produtos/produto";

export interface Etiqueta {
  gerar(produto: Produto): string;
}
