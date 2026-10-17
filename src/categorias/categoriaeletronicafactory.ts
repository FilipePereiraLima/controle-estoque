import { CategoriaFactory } from "./categoriafactory";
import { EtiquetaEletronica } from "./etiquetaeletronica";
import { ArmazenamentoEletronico } from "./armazenamentoeletronico";

export class CategoriaEletronicaFactory extends CategoriaFactory {
  criarEtiqueta(): EtiquetaEletronica {
    return new EtiquetaEletronica();
  }

  criarRegraArmazenamento(): ArmazenamentoEletronico {
    return new ArmazenamentoEletronico();
  }
}
