import { RegraArmazenamento } from "./regraarmazenamento";

export class ArmazenamentoAlimenticio implements RegraArmazenamento {
  descrever(): string {
    return "Armazenar refrigerado";
  }
}
