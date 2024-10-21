import { Servicos } from "../servicos/Servicos";
import { Barbeiros } from "../usuarios/Barbeiros";
import { Clientes } from "../usuarios/Clientes";
import { Comanda } from "./Comanda";

export interface Agenda {
  idAgendamento: number;
  dataHora: Date;
  cliente: Clientes;
  barbeiro: Barbeiros;
  servico: Servicos;
  comanda: Comanda;
}

