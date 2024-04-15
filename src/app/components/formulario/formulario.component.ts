import { Component } from '@angular/core';
import { PersonalService } from 'src/app/services/personal.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  constructor(private servicio: PersonalService){}

  id:any;
  nombre:any;
  genero:any;

  guardarPersona(persona : any){
    //console.log(persona.value)
    this.servicio.postPersonal(persona.value).subscribe()
  }

  editarPersona(){
    //this.servicio.putPersonal().subscribe()
  }

}
