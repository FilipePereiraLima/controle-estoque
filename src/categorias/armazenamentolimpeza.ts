import { RegraArmazenamento } from "./regraarmazenamento";

export class ArmazenamentoLimpeza implements RegraArmazenamento {
  descrever(): string {
    return "Armazenar longe do calor e do alcance de crianças";
  }
}
