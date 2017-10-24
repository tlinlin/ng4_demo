import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './heroDetails.component';
import { HeroLists } from './heroList/list';
@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroLists
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
