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


  constructor( private router: Router){}


  clienteForm!: FormGroup;

  ngOnInit(): void {
    this.clienteForm= new FormGroup({
      id: new FormControl(0),
      nome: new FormControl(''),
      telefone: new FormControl(0),
      email: new FormControl('')
    })
  }


  submit(){
    this.onSubmit.emit(this.clienteForm.value);


    //console.log(this.clienteForm.value)  //Testar o botao cadastrar
  }

}
