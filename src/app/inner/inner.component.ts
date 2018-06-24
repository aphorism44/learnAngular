import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nested',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.css']
})
export class InnerComponent implements OnInit {
  @Input('name') name: string;
  @Input('occupation') occupation: string;
  constructor() { 
    this.name = "Joe Blow";
    this.occupation = "Unemployed";
  }

  ngOnInit() {
  }

}
