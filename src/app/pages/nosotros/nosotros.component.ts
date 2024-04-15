import { Component } from '@angular/core';
import { NosotrosService } from 'src/app/services/nosotros.service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent {

  constructor(private servicio: NosotrosService){}

  personas: any
  ngOnInit(){
    this.servicio.getNosotros().subscribe(persona => {
      console.log(persona)
      this.personas=persona
    })
  }

}
