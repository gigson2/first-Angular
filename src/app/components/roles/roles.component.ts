import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {
 // creating variables in typescript
firstName: string = "John";

version = "18.2.5";

newVersion:number= 18.2;

isActive:boolean = true;

currentDate:Date = new Date();
inputType:string = "text";
inputType2:string = "number";
inputType3:string = "password";
inputType4:string = "checkbox";

// property binding

selectState:string='';

}
