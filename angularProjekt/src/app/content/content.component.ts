import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styles: [`p{text-align: center;
  border: 1px solid blue;
  }`]
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
