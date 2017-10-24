import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Hero } from "../hero";

@Component({
   selector:"hero-list",
   templateUrl: "./list.html",
   styleUrls:["./list.css"]
})

export class HeroLists {
    title:"这是英雄的列表";
    selectedHero: Hero;
    @Input() heroes: Hero;
    @Output() changeHero: EventEmitter<Hero> = new EventEmitter();
    onSelect(hero:Hero): void {
      console.log(hero,111111);
      this.changeHero.emit(hero);
    };
}
