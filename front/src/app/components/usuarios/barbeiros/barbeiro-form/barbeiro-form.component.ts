import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Barbeiros } from '../../../../models/usuarios/Barbeiros';

@Component({
  selector: 'app-barbeiro-form',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './barbeiro-form.component.html',
  styleUrl: './barbeiro-form.component.css'
})
export class BarbeiroFormComponent implements OnInit{

  @Output () onSubmit = new EventEmitter<Barbeiros>();

  constructor( private router: Router){}


  barbeiroForm!: FormGroup;

  ngOnInit(): void {
    this.barbeiroForm = new FormGroup({
      id: new FormControl(0),
      nome: new FormControl(''),
      telefone: new FormControl(0),
      especialidade: new FormControl('')
    })

  }



  submit(){
    this.onSubmit.emit(this.barbeiroForm.value);
    console.log(this.barbeiroForm.value)
  }

}
