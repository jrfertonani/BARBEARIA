import { Component, Input, OnInit } from '@angular/core';
import { ServicoFormComponent } from "../servico-form/servico-form.component";
import { ServicosService } from '../../../services/servicos/servicos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Servicos } from '../../../models/servicos/Servicos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-servico-edit',
  standalone: true,
  imports: [ServicoFormComponent, CommonModule],
  templateUrl: './servico-edit.component.html',
  styleUrl: './servico-edit.component.css'
})
export class ServicoEditComponent implements OnInit {



  btnAcao = "Editar"
  descTitulo = "Editar serviço"

  servico! : Servicos;


  constructor(private serviceServico: ServicosService, private router: Router, private route: ActivatedRoute ){}

  ngOnInit(): void {

    //console.log(1)

    const id = Number(this.route.snapshot.paramMap.get('id'))

    this.serviceServico.findById(id).subscribe(servico => {

     // console.log(2)

      this.servico = servico;
    })

  }

  editServico(servico : Servicos){
    //console.log(servico)
    this.serviceServico.editServico(servico).subscribe((servico) => {
      console.log(servico)
      this.router.navigate(['/servicos']);
  })
  }



}


