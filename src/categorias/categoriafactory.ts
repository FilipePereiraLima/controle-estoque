import { Etiqueta } from "./etiqueta";
import { RegraArmazenamento } from "./regraarmazenamento";

export abstract class CategoriaFactory {
  abstract criarEtiqueta(): Etiqueta;
  abstract criarRegraArmazenamento(): RegraArmazenamento;
}
