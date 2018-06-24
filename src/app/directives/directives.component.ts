import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  condition: boolean = true;
  people: string[] = ["Andrew", "Dillon", "Phillipe", "Susan"];
  monsters = [
    {name: "Nessie", location: "Lock Ness, Scotland"}
    , {name: "Bigfoot", location: "Pacific Northwest, USA"}
    , {name: "Godzilla", location: "Tokyo, Japan"}
  ]
  time: string = 'night';

  colors: string[] = ["red", "blue", "green", "yellow"];
  name: string;
  color: string = 'color';
  isDisabled: boolean = true;
  classes: string[] = ['bold', 'italic', 'highlight']
  selectedClasses: string[] = [];

  constructor() { }

  toggleCondition = function() {
    this.condition = !this.condition;
  }

  changeToDay = function() {
    this.time = 'day';
  }
  changeToNight = function() {
    this.time = 'night';
  }

  enabler() {
    this.isDisabled = !this.isDisabled;
  }

  addClass(event: any) {
    this.selectedClasses = [];
    let values = event.target.options;
    let opt: any;

    for (let i = 0; i < values.length; i++) {
      opt = values[i];
      if (opt.selected)
        this.selectedClasses.push(opt.text);
    }

  }


  ngOnInit() {
  }

}
