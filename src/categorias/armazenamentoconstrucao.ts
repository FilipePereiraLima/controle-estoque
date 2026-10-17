import { RegraArmazenamento } from "./regraarmazenamento";

export class ArmazenamentoConstrucao implements RegraArmazenamento {
  descrever(): string {
    return "Armazenar em local coberto e protegido da umidade";
  }
}
