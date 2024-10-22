import { Component, EventEmitter, Input, input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Barbeiros } from '../../../../models/usuarios/Barbeiros';

@Component({
  selector: 'app-barbeiro-form',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './barbeiro-form.component.html',
  styleUrl: './barbeiro-form.component.css'
})
export class BarbeiroFormComponent implements OnInit{

  @Output () onSubmit = new EventEmitter<Barbeiros>();

  @Input () dadosBarbeiro : Barbeiros | null = null;

  @Input() btnAcao! : string;
  @Input() descTitulo!: string;

  constructor( private router: Router){}


  barbeiroForm!: FormGroup;

  ngOnInit(): void {

   // console.log(this.dadosBarbeiro); // checar se esta retornando
    //console.log(3) //teste para ver qual requisição esta chegando primeiro -- NÂO ESQUECER DO *ngIf no templete html de editar

    this.barbeiroForm = new FormGroup({
      idBarbeiro: new FormControl(this.dadosBarbeiro ? this.dadosBarbeiro.idBarbeiro : 0),
      nome: new FormControl(this.dadosBarbeiro ? this.dadosBarbeiro.nome :''),
      telefone: new FormControl(this.dadosBarbeiro ? this.dadosBarbeiro.telefone : 0),
      especialidade: new FormControl(this.dadosBarbeiro ? this.dadosBarbeiro.especialidade :'')
    })

  }



  submit(){
    this.onSubmit.emit(this.barbeiroForm.value);
    //console.log(this.barbeiroForm.value)
  }

}

