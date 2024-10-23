import { Component, Input, OnInit } from '@angular/core';
import { ServicoFormComponent } from "../servico-form/servico-form.component";
import { ServicosService } from '../../../services/servicos/servicos.service';
import { Router } from '@angular/router';
import { Servicos } from '../../../models/servicos/Servicos';

@Component({
  selector: 'app-servico-creat',
  standalone: true,
  imports: [ServicoFormComponent],
  templateUrl: './servico-creat.component.html',
  styleUrl: './servico-creat.component.css'
})
export class ServicoCreatComponent {

  btnAcao = "Cadastrar"
  descTitulo = "Cadastro de serviços"


  constructor(private serviceServico: ServicosService,  private router: Router){}


  crearServico(servico: Servicos){
    this.serviceServico.createSErvico(servico).subscribe(servico => {
      this.router.navigate(['/servicos']);

      //console.log(servico);
    })
  }

}
