import { Component } from '@angular/core';
import { FirebaseService } from 'src/app/services/Fire/firebase.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(private servicio: FirebaseService){}

  guardarPersonal(nick:string, mail: string, edad: string){

    const age:number= parseInt(edad)
    const temp= { "nick": nick, "email":mail, "edad": age}

    this.servicio.postPersonal(temp).subscribe();
  }


}

