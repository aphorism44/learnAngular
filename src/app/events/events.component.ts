import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {

  counter = 0;
  mouse: string;
  upValues: string = '';
  downValues: string = '';
  keypressValue; string = "";
  x: string = "";
  y:string = '';
  view: string = '';

  imageArray: string[] = [
    "../assets/images/flower.jpg"
    , "../assets/images/lake.jpg"
    , "../assets/images/bison.jpg"
  ];

  imageUrl: string = this.imageArray[this.counter];

  text:string = "try changing this text";

  constructor() { 

  }

  mouseGoesIn = function() {
    this.mouse = "entered";
  }
  mouseLeft = function() {
    this.mouse = "left";
  }
  changeImg = function() {
    if (this.counter < this.imageArray.length - 1)
      this.counter++;
    else
      this.counter = 0;

    this.imageUrl = this.imageArray[this.counter];
  }
  onKeyUp(event:any) {
    this.upValues = event.key;
    //this.upValues += event.target.value + ' | ';
  }
  onKeyDown(event:any) {
    this.downValues = event.key;
    //this.downValues += event.target.value + ' | ';
  }
  keypress(event:any) {
    this.keypressValue = event.key;
    //this.keypressValue += event.target.value + ' | ';
  }
  move(event:any) {
    this.x = event.clientX;
    this.y = event.clientY;
  }
  underTheScope(event:any) {
    if (event.type == "focus")
      this.view = "the text box is focused";
    else if (event.type == "blur")
      this.view = "the input box is blurred";

    console.log(event);
  }


}
