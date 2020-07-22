import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrasesComponent } from './componentes/frases/frases.component';
import { ClipboardModule } from 'ngx-clipboard';
import { TextAreaCopyComponent } from './componentes/text-area-copy/text-area-copy.component';

@NgModule({
  declarations: [
    AppComponent,
    FrasesComponent,
    TextAreaCopyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
