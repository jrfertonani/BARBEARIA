import { Component } from '@angular/core';
import { AgendaFormComponent } from "../agenda-form/agenda-form.component";
import { AgendaService } from '../../../../services/administrativo/agenda/agenda.service';
import { Router } from '@angular/router';
import { Agenda } from '../../../../models/administrativoModels/Agenda';

@Component({
  selector: 'app-agenda-create',
  standalone: true,
  imports: [AgendaFormComponent],
  templateUrl: './agenda-create.component.html',
  styleUrl: './agenda-create.component.css'
})
export class AgendaCreateComponent {


  constructor(private serviceAgenda: AgendaService, private router: Router){}

  btnAcao = "Cadastrar";
  descTitulo = "Agendar";

  createAgenda(agenda: Agenda){
    this.serviceAgenda.createAgenda(agenda).subscribe((agenda) => {
      console.log(agenda)
      this.router.navigate(['/agenda'])
      console.log(agenda)
    })
    console.log(agenda)
  }


}

