import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PersonalService } from 'src/app/services/personal.service';

@Component({
  selector: 'app-detalle-personal',
  templateUrl: './detalle-personal.component.html',
  styleUrls: ['./detalle-personal.component.css']
})
export class DetallePersonalComponent {

  constructor(private servicio: PersonalService, private ruta: ActivatedRoute, private route : Router){}
  id:any;
  nombre:any;
  genero:any;

  ngOnInit(){
    //this.servicio.getPersonal().subscribe()
    this.ruta.params.subscribe(parametro => {
      console.log(parametro['idpersonal']);
      this.servicio.getPersona(parametro['idpersonal']).subscribe(p=>{
        this.id=p.id
        this.nombre=p.nombre
        this.genero=p.genero
      })

    })
  }

  editarPersona(persona:any){
    this.route.navigate(['personal'])
    this.servicio.putPersonal(persona.value).subscribe()
  }

}
