import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { HeaderComponent } from './header/header.component';
import { PanierComponent } from './panier/panier.component';

const routes: Routes = [{path:'main',component:GamesComponent},
{path:'header',component:HeaderComponent},
{path:'search/:searchTerm',component:GamesComponent},
{path:'panier',component:PanierComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
