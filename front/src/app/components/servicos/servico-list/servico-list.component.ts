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

  servicos: Servicos[] = [];
  servicoGeral: Servicos[] = [];

constructor(private serviceServico: ServicosService) {}


ngOnInit(): void {
   this.serviceServico.List().subscribe((servicos) =>{
    this.servicos = servicos;
    this.servicoGeral = servicos;
    console.log(servicos);
   })

}

}
