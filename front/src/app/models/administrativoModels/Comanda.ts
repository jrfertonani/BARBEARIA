import { Clientes } from "../usuarios/Clientes";
import { Agenda } from "./Agenda";

export interface Comanda {
  idComanda: number;
  valorTotal: number;
  dataPagamento: Date;
  formaPagamento: string;
  agendamento: Agenda;
}


