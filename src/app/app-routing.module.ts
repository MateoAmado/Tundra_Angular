import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TundraProductosComponent } from "./tundra-productos/tundra-productos.component";
import { TundraSobreNosotrosComponent } from "./tundra-sobre-nosotros/tundra-sobre-nosotros.component";

const routes: Routes = [
    {path: '', redirectTo: 'productos', pathMatch: 'full'},
    {path: 'productos', component: TundraProductosComponent},
    {path: 'sobre', component: TundraSobreNosotrosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
