import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NeumorphismDribbbleComponent } from './neumorphism-dribbble/neumorphism-dribbble.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { NeumorphicUiElementsComponent } from './neumorphic-ui-elements/neumorphic-ui-elements.component';


const routes: Routes = [
  { path: "", component: PaginaPrincipalComponent },
  { path: "neumorphism-dribbble", component: NeumorphismDribbbleComponent },
  { path: "neumorphism-ui-elements", component: NeumorphicUiElementsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
