import { Component } from '@angular/core';
import { BarbeiroFormComponent } from "../barbeiro-form/barbeiro-form.component";
import { BarbeirosService } from '../../../../services/usuarios/barbeiros/barbeiros.service';
import { Router } from '@angular/router';
import { Barbeiros } from '../../../../models/usuarios/Barbeiros';

@Component({
  selector: 'app-barbeiro-create',
  standalone: true,
  imports: [BarbeiroFormComponent],
  templateUrl: './barbeiro-create.component.html',
  styleUrl: './barbeiro-create.component.css'
})
export class BarbeiroCreateComponent {

  constructor(private serviceBarbeiro: BarbeirosService, private router: Router){}

  criateBrbeiro(barbeiro: Barbeiros){
    this.serviceBarbeiro.crearBarbeiro(barbeiro).subscribe(barbeiro =>{
      this.router.navigate(['/barbeiros'])
      console.log(barbeiro);
    })

  }

}
