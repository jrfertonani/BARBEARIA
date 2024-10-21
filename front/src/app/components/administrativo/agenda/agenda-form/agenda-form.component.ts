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

  constructor( private router: Router){}

  agendaForm!: FormGroup;

  ngOnInit(): void {
    this.agendaForm = new FormGroup({
      id: new FormControl(0),
      dataHora: new FormControl(0),
      cliente: new FormControl(''),
      barbeiro: new FormControl(''),
      servico: new FormControl('')
    })

  }


  submit(){
    this.onSubmit.emit(this.agendaForm.value)

   // console.log(this.agendaForm.value)//Testar o botao cadastrar
  }

}

