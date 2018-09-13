import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//   title = 'angularProjekt';
//
//   dogs = new Array<Dog>();
//
//   constructor(){
//     this.dogs.push(new Dog("jaaj",3), new Dog("jsjssss", 2))
// }
//
//   dog = new Dog('Reksio', 3)
//   days = ['poniedziałęk', 'wtorek', 'sroda', 'czwartek', 'piatek', 'sobota', 'niedziela']
// }
//
// class Dog{
//   constructor(public name:string, public age:number){
//
//   }

  // inputTex= 'tekst';
  // length = 5;
  // colorClass= 'color';
  // logoUrl = '';
  // isDisable = true;
  //
  //
  //
  // constructor(){
  //
  //   setTimeout(() =>{
  //     this.isDisable = false;
  //     },3000);
  // }
  //
  // change(){
  //   this.inputTex= "zmiana koloru";
  //   this.length= 10;
  //   this.colorClass = 'color2'
  //   this.logoUrl = 'https://www.wsb.pl/poznan/studenci/studia-podyplomowe/kierunki/aplikacje-internetowe-i-mobilne-studia-online';
  //
  // }
  //
  // inputTex= 'sss';
  // colorClass= 'color';
  // isDisable = true;
  // dzieki temu pola sa wylaczone//
  //
  // constructor(){
  //
  // }
  //
  // onFocus(){
  //   this.colorClass= 'color2'
  // }
  //
  // onClick(event){
  // console.log(event)
  // }
  //
  // onMouseMove(event){
  //   console.log('x: ' + event.clientX, 'y ' + event.clientY)
  // }
  //
  // onPaste(){
  //   this.inputTex = 'nie wklejaj, wpisz!';
  // }
  //
  // change(){
  //   this.isDisable = false;
  // }

  profession: String = 'programista';
  skill: String = "angular";

  constructor(){

  }

  // saveP(event){
  //   this.profession= event.target.value;
  //
  // }
  //
  // saveS(event){
  //   this.skill= event.target.value;
  // }

}
