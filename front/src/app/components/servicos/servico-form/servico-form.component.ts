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

  @Input() dadosServico : Servicos | null = null;



  @Input() btnAcao! : string;
  @Input() descTitulo! : string;

  constructor( private router: Router){}


  servicoForm!: FormGroup;

  ngOnInit(): void {

   // console.log(3)

    this.servicoForm = new FormGroup({
      idServico: new FormControl(this.dadosServico ? this.dadosServico.idServico : 0),
      nomeServico: new FormControl(this.dadosServico ? this.dadosServico.nomeServico : ''),
      preco: new FormControl(this.dadosServico ? this.dadosServico.preco : 0),
      descricao: new FormControl(this.dadosServico ? this.dadosServico.descricao : '')
    });
  }

  submit(){
    this.onSubmit.emit(this.servicoForm.value);

    //console.log(this.servicoForm.value);
  }


}


