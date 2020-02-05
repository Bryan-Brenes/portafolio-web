import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NeumorphismDribbbleComponent } from './neumorphism-dribbble/neumorphism-dribbble.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { NeumorphicUiElementsComponent } from './neumorphic-ui-elements/neumorphic-ui-elements.component';

@NgModule({
  declarations: [
    AppComponent,
    NeumorphismDribbbleComponent,
    PaginaPrincipalComponent,
    NeumorphicUiElementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
