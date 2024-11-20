import { Component } from '@angular/core';
import { RolesComponent } from '../roles/roles.component';
import { DesignationComponent } from '../designation/designation.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [RolesComponent, DesignationComponent, CommonModule],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {

  // Stores the name of current component clicked
  currentComponent: string = ""

  //Function to the change between the 2 tabs
  changeTab(tabName: string){
    this.currentComponent = tabName;
  }

}
