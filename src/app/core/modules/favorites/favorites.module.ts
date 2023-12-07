import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteRowComponent } from './favorite-row/favorite-row.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FavoriteRowComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    FavoriteRowComponent
  ]
})
export class FavoritesModule { }
