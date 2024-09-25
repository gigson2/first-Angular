import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DesignationComponent } from './components/designation/designation.component';
import { RolesComponent } from './components/roles/roles.component';
import { MasterComponent } from './components/master/master.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RolesComponent,DesignationComponent,MasterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularProject';
}
