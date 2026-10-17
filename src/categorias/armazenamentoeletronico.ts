import { RegraArmazenamento } from "./regraarmazenamento";

export class ArmazenamentoEletronico implements RegraArmazenamento {
  descrever(): string {
    return "Armazenar em local seco e arejado";
  }
}
