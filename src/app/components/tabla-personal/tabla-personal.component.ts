import { Component } from '@angular/core';
import { PersonalService } from 'src/app/services/personal.service';

@Component({
  selector: 'app-tabla-personal',
  templateUrl: './tabla-personal.component.html',
  styleUrls: ['./tabla-personal.component.css']
})
export class TablaPersonalComponent {

  constructor(private servicio: PersonalService){}

  personal: any

  ngOnInit(){
    this.servicio.getPersonal().subscribe(p=>{
      this.personal= p;
    })
  }

  borrar(id:any){
    this.servicio.deletePersonal(id).subscribe()
  }

}
