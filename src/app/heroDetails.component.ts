import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Hero } from "./hero";
@Component({
  selector: 'hero-detail',
  templateUrl: './heroDetails.component.html',
  styleUrls: ['./heroDetails.component.css']
})

export class HeroDetailComponent {
  @Input() hero: Hero;
  @Output() changeNumber: EventEmitter<number> = new EventEmitter();
  sureBtn(hero){
    this.hero = hero;
    this.changeNumber.emit(hero);
  }
}
