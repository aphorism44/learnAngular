import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-directive',
  templateUrl: './custom-directive.component.html',
  styleUrls: ['./custom-directive.component.css']
})
export class CustomDirectiveComponent implements OnInit {

  images: string[] = [
    "../assets/images/flower.jpg"
    , "../assets/images/lake.jpg"
    , "../assets/images/bison.jpg"
  ];

  constructor() { }

  ngOnInit() {
  }

}
