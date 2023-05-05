import { Component } from '@angular/core';
import { FirebaseService } from 'src/app/services/Fire/firebase.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {

  constructor(private servicio: FirebaseService){}

  dataPersonal:any={}

  ngOnInit(){
    this.servicio.getPersonal().subscribe( p=>{
      this.dataPersonal=p
    })
  }
}
