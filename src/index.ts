import { Estoque } from "./estoque/estoque";
import { ProdutoAlimenticioFactory } from "./produtos/factories/alimenticiofactory";

// Singleton: duas "chamadas" devem devolver a mesma instância
const a = Estoque.getInstance();
const b = Estoque.getInstance();
console.log("Mesma instância?", a === b);

// Factory Method: criamos o produto sem informar a validade
const factory = new ProdutoAlimenticioFactory();
const bolo = factory.criarProduto("Bolo de chocolate", 25, 10);

// Adiciona por uma referência e lista pela outra
const id = a.adicionar(bolo);
console.log("Id gerado:", id);
console.log("Produtos no estoque:", b.listar());