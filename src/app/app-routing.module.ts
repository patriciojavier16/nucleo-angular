import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { AdministracionComponent } from './pages/administracion/administracion.component';
import { DetallePersonalComponent } from './pages/detalle-personal/detalle-personal.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'personal', component: PersonalComponent},
  {path: 'administracion', component: AdministracionComponent},
  {path: 'personal/:idpersonal', component: DetallePersonalComponent},
  
  {path: "", redirectTo:'home', pathMatch:"full"},
  {path: "**", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
