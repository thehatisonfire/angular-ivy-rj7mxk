import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';

import { AppComponent } from "./app.component";
import { NewsComponent } from "./news/news.component";
import { MenuComponent } from './menu/menu.component';
import { HeroesComponent } from './heroes/heroes.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  imports: [BrowserModule, FormsModule,  
    RouterModule.forRoot([
      { path: '', component: NewsComponent },
      { path: 'heroes', component: HeroesComponent },
      { path: 'info', component: InfoComponent },
    ])],
  declarations: [AppComponent, NewsComponent, MenuComponent, HeroesComponent, InfoComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
