import { Component, OnInit } from '@angular/core';
import { Comanda } from '../../../../models/administrativoModels/Comanda';
import { ComandasService } from '../../../../services/administrativo/comandas/comandas.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-comanda-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './comanda-list.component.html',
  styleUrl: './comanda-list.component.css'
})
export class ComandaListComponent implements OnInit{

  comandas: Comanda[] = [];
  comandaGeral: Comanda [] = [];

  constructor(private serviceComandas: ComandasService){}




  ngOnInit(): void {
    this.serviceComandas.List().subscribe((comandas) => {
      this.comandas = comandas;
      this.comandaGeral = comandas;
      console.log(comandas);
    })
  }

  search(event:Event){
    const target = event.target as HTMLInputElement;
    const value = target.value;

    this.comandas = this.comandaGeral.filter(comandas => {
      return comandas.idComanda.toString().includes(value);
  })

 // console.log("TARGET", target);
 // console.log("VALUE", value);
  }

  delete(id: number){
    this.serviceComandas.delete(id).subscribe(comandas => {
      window.location.reload();
    })
  }

}



