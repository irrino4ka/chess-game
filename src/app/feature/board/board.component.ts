import { Bishop } from './../piece/bishop';
import { Knight } from './../piece/knight';
import { Rook } from './../piece/rook';
import { PieceColor } from './../../core/model';
import { Pawn } from './../piece/pawn';
import { ChessService } from './../../core/services/chess.service';
import { Component } from '@angular/core';
import { range } from 'lodash';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  matrixRange = range(64);
  pieces =Array(63).fill(0);
  // knightPosition$ = this.chessService.knightPosition$;

  constructor(private chessService: ChessService) {

    for (let i = 8; i < 16; i++) {
      this.pieces[i] = new Pawn(PieceColor.BLACK);
    }

    for (let i = 48; i < 56; i++) {
      this.pieces[i] = new Pawn(PieceColor.WHITE);
    }

    this.pieces[0] = new Rook(PieceColor.BLACK);
    this.pieces[7] = new Rook(PieceColor.BLACK);
    this.pieces[56] = new Rook(PieceColor.WHITE);
    this.pieces[63] = new Rook(PieceColor.WHITE);

    this.pieces[1] = new Knight(PieceColor.BLACK);
    this.pieces[6] = new Knight(PieceColor.BLACK);
    this.pieces[57] = new Knight(PieceColor.WHITE);
    this.pieces[62] = new Knight(PieceColor.WHITE);

    // this.pieces[2] = new Bishop(PieceColor.BLACK);
    // this.pieces[5] = new Bishop(PieceColor.BLACK);
    // this.pieces[56] = new Bishop(PieceColor.WHITE);
    // this.pieces[61] = new Bishop(PieceColor.WHITE);
  }



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

