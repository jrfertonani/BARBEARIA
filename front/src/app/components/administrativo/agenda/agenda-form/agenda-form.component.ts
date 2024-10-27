import {  Component, EventEmitter, Input, OnInit, Output  } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Agenda } from '../../../../models/administrativoModels/Agenda';

@Component({
  selector: 'app-agenda-form',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './agenda-form.component.html',
  styleUrl: './agenda-form.component.css'
})
export class AgendaFormComponent implements OnInit{

  @Output () onSubmit = new EventEmitter<Agenda>();

  @Input() dadosAgenda : Agenda | null = null;

  @Input() btnAcao!: string;
  @Input() descTitulo!: string;



  constructor( private router: Router){}

  agendaForm!: FormGroup;

  ngOnInit(): void {
    this.agendaForm = new FormGroup({
      idAgendamento: new FormControl(this.dadosAgenda ? this.dadosAgenda.idAgendamento : 0),
      dataHora: new FormControl(this.dadosAgenda ? this.dadosAgenda.dataHora : 0),
      idCliente: new FormControl(this.dadosAgenda ? this.dadosAgenda.cliente.idCliente : 0),
      idBarbeiro: new FormControl(this.dadosAgenda ? this.dadosAgenda.barbeiro.idBarbeiro : 0),
      idServico: new FormControl(this.dadosAgenda ? this.dadosAgenda.servico.idServico : 0),
      comanda: new FormControl(this.dadosAgenda ? this.dadosAgenda.comanda.idComanda: 0)
    })

  }


  submit(){
    this.onSubmit.emit(this.agendaForm.value)

   // console.log(this.agendaForm.value)//Testar o botao cadastrar
  }

}

