import { Component, OnInit } from '@angular/core';
import { AgendaFormComponent } from "../agenda-form/agenda-form.component";
import { ActivatedRoute, Router } from '@angular/router';
import { Agenda } from '../../../../models/administrativoModels/Agenda';
import { AgendaService } from '../../../../services/administrativo/agenda/agenda.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agenda-edit',
  standalone: true,
  imports: [AgendaFormComponent, CommonModule],
  templateUrl: './agenda-edit.component.html',
  styleUrl: './agenda-edit.component.css'
})
export class AgendaEditComponent implements OnInit{

  agenda!: Agenda;

  btnAcao = "Editar";
  descTitulo = "Editar agenda";

  constructor(private serviceAgenda: AgendaService, private router: Router, private route: ActivatedRoute){}


  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))

    this.serviceAgenda.findById(id).subscribe(agenda =>{
      this.agenda = agenda;
    })

  }

  editAgenda(agenda : Agenda){
    this.serviceAgenda.editAgenda(agenda).subscribe(agenda => {
      this.router.navigate(['/agenda'])
    })
  }



}
