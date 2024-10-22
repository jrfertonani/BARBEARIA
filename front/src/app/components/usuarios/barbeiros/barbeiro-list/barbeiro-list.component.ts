import { Component, OnInit } from '@angular/core';
import { BarbeirosService } from '../../../../services/usuarios/barbeiros/barbeiros.service';
import { Barbeiros } from '../../../../models/usuarios/Barbeiros';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-barbeiro-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './barbeiro-list.component.html',
  styleUrl: './barbeiro-list.component.css'
})
export class BarbeiroListComponent implements OnInit{


  barbeiros: Barbeiros [] = [];
  barbeiroGeral: Barbeiros[] = [];

  constructor(private serviceBarbeiro: BarbeirosService) {}


  ngOnInit(): void {
      this.serviceBarbeiro.List().subscribe((barbeiros) => {
        this.barbeiros = barbeiros;
        this.barbeiroGeral = barbeiros;
        console.log(barbeiros);
      })

  }

  search(event: Event){
    const target = event.target as HTMLInputElement;
    const value = target.value.toLocaleLowerCase();

    this.barbeiros = this.barbeiroGeral.filter(barbeiros => {
      return barbeiros.nome.toLocaleLowerCase().includes(value);
    })

    //console.log("TARGET", target);
    //console.log("VALUE", value);
  }


  delete(id: number ){
    this.serviceBarbeiro.delete(id).subscribe(barbeiros =>{
      window.location.reload();
    })
  }

}
