export interface Comandas {
  idComanda: number;
  valorTotal: number;
  dataPagamento: Date;
  formaPagamento: string;
  agendamentoId?: number;
}
