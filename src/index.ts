import { Estoque } from "./estoque/estoque";
import { ProdutoAlimenticioFactory } from "./produtos/factories/alimenticiofactory";
import { CategoriaFactory } from "./categorias/categoriafactory";
import { CategoriaAlimenticiaFactory } from "./categorias/categoriaalimenticiafactory";

// Singleton
const a = Estoque.getInstance();
const b = Estoque.getInstance();
console.log("Mesma instância?", a === b);

// Factory Method
const factory = new ProdutoAlimenticioFactory();
const bolo = factory.criarProduto("Bolo de chocolate", 25, 10);

// Abstract Factory
const categoria: CategoriaFactory = new CategoriaAlimenticiaFactory();
const etiqueta = categoria.criarEtiqueta();
const regra = categoria.criarRegraArmazenamento();

const id = a.adicionar(bolo);
console.log("Id gerado:", id);
console.log("Produtos no estoque:", b.listar());
console.log("Etiqueta:", etiqueta.gerar(bolo));
console.log("Armazenamento:", regra.descrever());