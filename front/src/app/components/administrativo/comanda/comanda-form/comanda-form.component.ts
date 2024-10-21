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

  comandaForm!: FormGroup;


  constructor( private router: Router){}


  ngOnInit(): void {
    this.comandaForm = new FormGroup({
      id: new FormControl(0),
      valorTotal: new FormControl(0),
      dataPagamento: new FormControl(''),
      formaPagamento: new FormControl(''),
      agendamento: new FormControl('')
    })
  }


  submit(){
    this.onSubmit.emit(this.comandaForm.value);
    console.log(this.comandaForm.value)
  }
}
