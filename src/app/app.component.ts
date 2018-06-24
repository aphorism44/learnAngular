import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  speed: string = "Slow";
  title: string = 'First Angular App';
  vehicle: string = "Train";
  newSpeed: string = "Hypersonic";
  newVehicle: string = "Plane";

  upper = function(str: any) {
    str = str.toUpperCase();
    return str;
  }

  lower = function(str:any) {
    return str.toLowerCase();
  }

  setValues = function(speed: any, vehicle: any) {
    this.speed = speed;
    this.vehicle = vehicle;
  }


}
