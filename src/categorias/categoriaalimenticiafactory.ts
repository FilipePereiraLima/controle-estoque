import { CategoriaFactory } from "./categoriafactory";
import { EtiquetaAlimenticia } from "./etiquetaalimenticia";
import { ArmazenamentoAlimenticio } from "./armazenamentoalimenticio";

export class CategoriaAlimenticiaFactory extends CategoriaFactory {
  criarEtiqueta(): EtiquetaAlimenticia {
    return new EtiquetaAlimenticia();
  }

  criarRegraArmazenamento(): ArmazenamentoAlimenticio {
    return new ArmazenamentoAlimenticio();
  }
}
