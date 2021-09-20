import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChessService } from './core/services/chess.service';
import { BoardComponent } from './feature/board/board.component';
import { TileComponent } from './feature/tile/tile.component';


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    TileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ChessService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
