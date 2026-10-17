import { CategoriaFactory } from "./categoriafactory";
import { EtiquetaLimpeza } from "./etiquetalimpeza";
import { ArmazenamentoLimpeza } from "./armazenamentolimpeza";

export class CategoriaLimpezaFactory extends CategoriaFactory {
  criarEtiqueta(): EtiquetaLimpeza {
    return new EtiquetaLimpeza();
  }

  criarRegraArmazenamento(): ArmazenamentoLimpeza {
    return new ArmazenamentoLimpeza();
  }
}
