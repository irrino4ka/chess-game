import { ChessService } from './../../core/services/chess.service';
import { PositionCoord } from './../../core/model';
import { Component, Input } from '@angular/core';
import { range } from 'lodash';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  matrix = range(64);
  knightPosition$ = this.chessService.knightPosition$;

  constructor(private chessService: ChessService) { }



  // tileClick(pos: PositionCoord) {
  //   if (this.chessService.canMoveKnight(pos)) {
  //     this.chessService.moveKnight(pos);
  //   }
  // }

  // allowDrop($event) {
  //   console.log(' finish drop',$event);
  // }

  // drop($event) {
  //   console.log(' drop',$event);
  // }

}

