import { Component } from '@angular/core';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {
  firstName: string = "Angular Tutorial";

  version: number = 17;

  isActive: boolean = false;

  currentDate: Date = new Date();
}
