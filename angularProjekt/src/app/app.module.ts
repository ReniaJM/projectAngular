import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { ItemComponent } from './item/item.component';
import { CreatedComponent } from './created/created.component';
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MenuComponent,
    ContentComponent,
    ItemComponent,
    CreatedComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
