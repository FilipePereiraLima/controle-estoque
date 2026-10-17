import { CategoriaFactory } from "./categoriafactory";
import { EtiquetaConstrucao } from "./etiquetaconstrucao";
import { ArmazenamentoConstrucao } from "./armazenamentoconstrucao";

export class CategoriaConstrucaoFactory extends CategoriaFactory {
  criarEtiqueta(): EtiquetaConstrucao {
    return new EtiquetaConstrucao();
  }

  criarRegraArmazenamento(): ArmazenamentoConstrucao {
    return new ArmazenamentoConstrucao();
  }
}
