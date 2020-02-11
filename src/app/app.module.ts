import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NeumorphismDribbbleComponent } from './neumorphism-dribbble/neumorphism-dribbble.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { NeumorphicUiElementsComponent } from './neumorphic-ui-elements/neumorphic-ui-elements.component';
import { ChatPageComponent } from './chatDashboard/chat-page/chat-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NeumorphismDribbbleComponent,
    PaginaPrincipalComponent,
    NeumorphicUiElementsComponent,
    ChatPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
