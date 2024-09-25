import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRole } from '../../model/interface/role';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {

  roleList: IRole[] = [];
  http = inject(HttpClient);
  // creating a constructor


  // creating a lifecycle event using ngOnInit for dependency injection. dependency injection is used to create a component in angular.
  ngOnInit(): void {
    this.getallRoles()
  }

  getallRoles() {
    this.http.get("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res: any) => {
      this.roleList = res.data;
    })
  }

  // // creating variables in typescript
  // firstName: string = "John";

  // version = "18.2.5";

  // newVersion: number = 18.2;

  // isActive: boolean = true;

  // currentDate: Date = new Date();
  // inputType: string = "text";
  // inputType2: string = "number";
  // inputType3: string = "password";
  // inputType4: string = "checkbox";

  // // property binding

  // selectState: string = '';

  // // event binding


  // //function
  // showWelcomeMessage() {
  //   alert("Welcome to Angular 18.2.5");
  // }
  // //function with parameters
  // showMessage(message: string) {
  //   alert(message);

  // }
}
