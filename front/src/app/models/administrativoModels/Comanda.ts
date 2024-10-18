export interface Comanda {
  idComanda: number;
  valorTotal: number;
  dataPagamento: Date;
  formaPagamento: string;
  agendamentoId?: number;
}
