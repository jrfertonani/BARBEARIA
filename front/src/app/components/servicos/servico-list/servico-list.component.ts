import { Component, OnInit } from '@angular/core';
import { ServicosService } from '../../../services/servicos/servicos.service';
import { Servicos } from '../../../models/servicos/Servicos';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-servico-list',
  standalone: true,
  imports: [RouterModule],
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


search(event: Event){
  const target = event.target as HTMLInputElement;
  const value = target.value.toLocaleLowerCase();

  this.servicos = this.servicoGeral.filter(servicos => {
    return servicos.nomeServico.toLocaleLowerCase().includes(value);
  })

  //console.log("TARGET", target);
    //console.log("VALUE", value);
}

}
