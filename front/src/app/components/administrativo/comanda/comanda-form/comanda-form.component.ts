import {  Component, EventEmitter, Input, OnInit, Output  } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Comanda } from '../../../../models/administrativoModels/Comanda';


@Component({
  selector: 'app-comanda-form',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './comanda-form.component.html',
  styleUrl: './comanda-form.component.css'
})
export class ComandaFormComponent implements OnInit{

  @Output () onSubmit = new EventEmitter<Comanda>();

  @Input() dadosComanda : Comanda | null = null;

  @Input() btnAcao!: string;
  @Input() descTitulo!: string;

  constructor( private router: Router){}

  comandaForm!: FormGroup;

  ngOnInit(): void {
    this.comandaForm = new FormGroup({
      idComanda: new FormControl(this.dadosComanda ? this.dadosComanda.idComanda : 0),
      valorTotal: new FormControl(this.dadosComanda ? this.dadosComanda.valorTotal : 0),
      dataPagamento: new FormControl(this.dadosComanda ? this.dadosComanda.dataPagamento : 0),
      formaPagamento: new FormControl(this.dadosComanda ? this.dadosComanda.formaPagamento : ''),
      agendamento: new FormControl(this.dadosComanda ? this.dadosComanda.agendamento.idAgendamento : 0)
    })
  }


  submit(){
    this.onSubmit.emit(this.comandaForm.value);
    console.log(this.comandaForm.value)
  }
}
