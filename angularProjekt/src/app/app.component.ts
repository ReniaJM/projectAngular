import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularProjekt';

  dog = new Dog('Reksio', 3)
}

class Dog{
  constructor(public name:string, public age:number){

  }
}
