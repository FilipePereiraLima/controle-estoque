Factory Method
Onde: src/produtos/factories
Por quê: o sistema possui varios tipos de produtos e cada produto tem certas caracteriscas, como produto eletronico que possui voltagem e de limpeza não possui.

Singleton
Onde: src/estoque
Por quê: o sistema precisa de um estoque, com isto foi implementado Singleton no mesmo para não ocorrer de ter varios estoques, se ocorresse de dois ou mais estoques, acarretaria de ter varios produtos com id's diferentes para cada estoque.

Abstract Factory
Onde: src/categorias
Por quê: cada categoria de produto tem sua propria etiqueta e regra de armazenamento diferentes, entao foi usado abstract para criar familias de objetos relacionados.

Builder
Onde: src/produtos/builders
Por quê: cada categoria tem campos diferentes e o builder permite montar o produto passo a passo, so chamando os metodos que precisam, sem criar um construtor enorme com muitos parametros.

Prototype
Onde: src/produtos
Por quê: permite copiar um produto ja existente através do metodo clonar(), criando um objeto independente com os mesmos dados, util para cadastrar produtos parecidos sem preencher tudo novamente.
