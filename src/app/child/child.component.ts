import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  private message = "";

  @Output() myCustomEvent: EventEmitter<any> = new EventEmitter();

  clicked() {
    this.message = "You've made a custom event!";
    this.myCustomEvent.emit(this.message);
  }

  mouseleave() {
    this.message = "";
    this.myCustomEvent.emit(this.message);
  }

  constructor() { }

  ngOnInit() {
  }

}
