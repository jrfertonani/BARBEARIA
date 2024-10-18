import { Component, OnInit } from '@angular/core';
import { ServicosService } from '../../../services/servicos/servicos.service';
import { Servicos } from '../../../models/servicos/Servicos';

@Component({
  selector: 'app-servico-list',
  standalone: true,
  imports: [],
  templateUrl: './servico-list.component.html',
  styleUrl: './servico-list.component.css'
})
export class ServicoListComponent implements OnInit{

  servico: Servicos[] = [];
  servicoGeral: Servicos[] = [];

constructor(private serviceServico: ServicosService) {}


ngOnInit(): void {
   this.serviceServico.List().subscribe((servico) =>{
    this.servico = servico;
    this.servicoGeral = servico;
    console.log(servico);
   })

}

}
