import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NeumorphismDribbbleComponent } from "./neumorphism-dribbble/neumorphism-dribbble.component";
import { PaginaPrincipalComponent } from "./pagina-principal/pagina-principal.component";
import { NeumorphicUiElementsComponent } from "./neumorphic-ui-elements/neumorphic-ui-elements.component";
import { BubbleSortAlgoritmComponent } from "./bubble-sort-algoritm/bubble-sort-algoritm.component";

@NgModule({
  declarations: [
    AppComponent,
    NeumorphismDribbbleComponent,
    PaginaPrincipalComponent,
    NeumorphicUiElementsComponent,
    BubbleSortAlgoritmComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
