import { Component } from '@angular/core';
import { Hero } from "./hero";
const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // 状态
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero;
  changeShow:boolean = true;
  // 事件部分
  dashboard(){
    this.changeShow = true;
  };
  herolists(){
    this.changeShow = false;
  };
  sureBtn(hero){
    console.log("sure");
    this.selectedHero = hero;
  };
  numberIChange(i:Hero){
    console.log(i,"父组件接收到的子组件的数据");
    this.selectedHero = i;
  };
  HeroChange(i:Hero){
    this.selectedHero = i;
    console.log(i,"list");
  }
}
