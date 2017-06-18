import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './containers/game/game.component';
import { GamePageComponent } from './containers/game-page/game-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GameComponent,
    GamePageComponent
  ],
  exports: [
    GamePageComponent,
  ]
})
export class GameModule { }
