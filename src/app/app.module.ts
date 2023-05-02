import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { GifsModule } from './gifs/gifs.module';
import { share } from 'rxjs';
import { SharedModule } from './shared/shared.module';
import { CardComponent } from './gifs/components/card/card.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GifsModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
