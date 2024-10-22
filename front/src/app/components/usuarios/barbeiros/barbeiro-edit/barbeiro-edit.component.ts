import { Component, OnInit } from '@angular/core';
import { BarbeiroFormComponent } from "../barbeiro-form/barbeiro-form.component";
import { BarbeirosService } from '../../../../services/usuarios/barbeiros/barbeiros.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Barbeiros } from '../../../../models/usuarios/Barbeiros';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-barbeiro-edit',
  standalone: true,
  imports: [BarbeiroFormComponent, CommonModule],
  templateUrl: './barbeiro-edit.component.html',
  styleUrl: './barbeiro-edit.component.css'
})
export class BarbeiroEditComponent implements OnInit{

  barbeiro! : Barbeiros;

  btnAcao = "Editar";
  descTitulo = "Editar Barbeiros"

  constructor(private serviceBarbeiro: BarbeirosService, private router: Router, private route: ActivatedRoute ){}


  ngOnInit(): void {

    //console.log(1) //teste para ver qual requisição esta chegando primeiro

    const id = Number(this.route.snapshot.paramMap.get('id'))

    this.serviceBarbeiro.finsById(id).subscribe(barbeiro => {

     // console.log(barbeiro) //conferir se esta retornando os dados
     //console.log(2) //teste para ver qual requisição esta chegando primeiro
      this.barbeiro = barbeiro;
    })

  }


  editBerbeiro(barbeiro: Barbeiros){
    this.serviceBarbeiro.editBarbeiro(barbeiro).subscribe(barbeiro => {
      this.router.navigate(['/barbeiros'])
    })
  }



}

