import { EstoqueFacade } from "./estoque/estoquefacade";

const estoque = new EstoqueFacade();

const idBolo = estoque.cadastrarAlimenticio("Bolo de chocolate", 25, 10);
const idTv = estoque.cadastrarEletronico("TV 50 polegadas", 2500, 5, "Bivolt");
console.log("Ids:", idBolo, idTv);

const idClone = estoque.clonar(idBolo);
console.log("Id do clone:", idClone);

console.log("Produtos no estoque:", estoque.listar());



// Antes do Facade
// import { Estoque } from "./estoque/estoque";
// import { ProdutoAlimenticioFactory } from "./produtos/factories/alimenticiofactory";
// import { CategoriaFactory } from "./categorias/categoriafactory";
// import { CategoriaAlimenticiaFactory } from "./categorias/categoriaalimenticiafactory";
// import { ProdutoAlimenticioBuilder } from "./produtos/builders/produtoalimenticiobuilder";
// import { ProdutoAlimenticio } from "./produtos/produtoalimenticio";

// // Singleton
// const a = Estoque.getInstance();
// const b = Estoque.getInstance();
// console.log("Mesma instância?", a === b);

// // Factory Method
// const factory = new ProdutoAlimenticioFactory();
// const bolo = factory.criarProduto("Bolo de chocolate", 25, 10);

// // Abstract Factory
// const categoria: CategoriaFactory = new CategoriaAlimenticiaFactory();
// const etiqueta = categoria.criarEtiqueta();
// const regra = categoria.criarRegraArmazenamento();

// // Builder
// const pao = new ProdutoAlimenticioBuilder()
//   .comDescricao("Pão francês")
//   .comPreco(1.5)
//   .comQuantidade(100)
//   .build();

// // Prototype
// const copia = pao.clonar();
// console.log("Clone antes de entrar no estoque, id:", copia.id);

// copia.descricao = "Pão integral";
// const idCopia = a.adicionar(copia);

// const id = a.adicionar(bolo);
// console.log("Id gerado:", id);
// console.log("Produtos no estoque:", b.listar());
// console.log("Etiqueta:", etiqueta.gerar(bolo));
// console.log("Armazenamento:", regra.descrever());

// a.adicionar(pao);
// console.log("Pão:", pao);

// console.log("Id do clone:", idCopia);
// console.log("Original intacto:", pao.descricao);
