import {  Component, EventEmitter, Input, OnInit, Output  } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Clientes } from '../../../../models/usuarios/Clientes';

@Component({
  selector: 'app-cliente-form',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './cliente-form.component.html',
  styleUrl: './cliente-form.component.css'
})
export class ClienteFormComponent implements OnInit{

  @Output () onSubmit = new EventEmitter<Clientes>();

  @Input () dadosCliente : Clientes | null = null;

  @Input () btnAcao!: string;
  @Input () descTitulo! :string;


  constructor( private router: Router){}


  clienteForm!: FormGroup;

  ngOnInit(): void {

   // console.log(3); //mostra os dados

    this.clienteForm= new FormGroup({
      id: new FormControl(this.dadosCliente ? this.dadosCliente.idCliente : 0),
      nome: new FormControl(this.dadosCliente ? this.dadosCliente.nome : ''),
      telefone: new FormControl(this.dadosCliente ? this.dadosCliente.telefone : 0),
      email: new FormControl(this.dadosCliente ? this.dadosCliente.email : '')
    })
  }


  submit(){
    this.onSubmit.emit(this.clienteForm.value);


    //console.log(this.clienteForm.value)  //Testar o botao cadastrar
  }

}

