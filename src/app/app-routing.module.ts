import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PersonalComponent } from './components/personal/personal.component';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { E404Component } from './components/e404/e404.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'personal', component:PersonalComponent },
  { path: 'administracion', component:AdministracionComponent},

  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', component:E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
