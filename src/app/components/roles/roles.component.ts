import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit{

  //Variable where the data in our API link will be stored. 
  roleList: any [] = [];

  //Inject our HTTPClient
  http = inject(HttpClient);

  ngOnInit():void{
  }

  //Gets All Roles
  getAllRoles(){
    this.http.get("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles") .subscribe((res: any) =>{
      console.log(res);
    })
  }
  // firstName: string = "Angular Tutorial";

  // version: number = 17;

  // isActive: boolean = false;

  // currentDate: Date = new Date();

  // selectedCounty: string = " ";

  // showWelcomeAlert(){
  //   alert ("Welcome to Angular Tutorial");
  // }

  // showMessage(message: string){
  //   alert(message);
  // }
}
