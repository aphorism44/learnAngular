import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customevent',
  templateUrl: './customevent.component.html',
  styleUrls: ['./customevent.component.css']
})
export class CustomeventComponent implements OnInit {


  text: string = "";
  eventHandler(event:any) {
    this.text = event;
  }

  constructor() { }

  ngOnInit() {
  }

}
