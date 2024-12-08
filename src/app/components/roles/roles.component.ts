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
  firstName: string = "Angular Tutorial";

  version: number = 17;

  isActive: boolean = false;

  currentDate: Date = new Date();

  selectedCounty: string = " ";

  showWelcomeAlert(){
    alert ("Welcome to Angular Tutorial");
  }

  showMessage(message: string){
    alert(message);
  }
}
