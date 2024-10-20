import { Agenda } from "./Agenda";

export interface Comanda {
  idComanda: number;
  valorTotal: number;
  dataPagamento: Date;
  formaPagamento: string;
  idAgendamento: number;
}


