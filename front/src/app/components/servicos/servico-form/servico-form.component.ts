import {  Component, EventEmitter, Input, OnInit, Output  } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Servicos } from '../../../models/servicos/Servicos';

@Component({
  selector: 'app-servico-form',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './servico-form.component.html',
  styleUrl: './servico-form.component.css'
})
export class ServicoFormComponent implements OnInit{

  @Output () onSubmit = new EventEmitter<Servicos>();

  constructor( private router: Router){}


  servicoForm!: FormGroup;

  ngOnInit(): void {
    this.servicoForm = new FormGroup({
      id: new FormControl(0),
      nomeServico: new FormControl(''),
      preco: new FormControl(0),
      descricao: new FormControl('')
    });
  }

  submit(){
    this.onSubmit.emit(this.servicoForm.value);

    console.log(this.servicoForm.value);
  }

}


