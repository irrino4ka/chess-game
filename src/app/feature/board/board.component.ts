import { Bishop } from './../piece/bishop';
import { Knight } from './../piece/knight';
import { Rook } from './../piece/rook';
import { PieceColor } from './../../core/model';
import { Pawn } from './../piece/pawn';
import { ChessService } from './../../core/services/chess.service';
import { Component } from '@angular/core';
import { range } from 'lodash';
import { Queen } from '../piece/queen';
import { King } from '../piece/king';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  higlighted = false;

  pos: number;

  matrixRange = range(64);
  pieces = Array(63).fill(0);
  moves: any;
  highlightedTiles = Array(63);

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

    this.pieces[2] = new Bishop(PieceColor.BLACK);
    this.pieces[5] = new Bishop(PieceColor.BLACK);
    this.pieces[58] = new Bishop(PieceColor.WHITE);
    this.pieces[61] = new Bishop(PieceColor.WHITE);

    this.pieces[3] = new Queen(PieceColor.BLACK);
    this.pieces[59] = new Queen(PieceColor.WHITE);
    this.pieces[4] = new King(PieceColor.BLACK);
    this.pieces[60] = new King(PieceColor.WHITE);

  }

  clickTile(ev: any, index: any) {
    console.log(ev, index);
    this.highlightedTiles = Array(63);
    this.highlightedTiles[index] = true;
    this.highlightedTiles = Array(63);
    this.pos = index;

    this.moves = this.pieces[index].possibleMoves({x : index % 8, y: Math.floor(index / 8)});
    this.moves.forEach(position => {
      const idx = position.y * 8 + position.x;
      this.highlightedTiles[idx] = true;
    });
  }

  drag(ev, i: number) {
    this.pos = i;
    this.moves = this.pieces[i].possibleMoves({x : i % 8, y: Math.floor(i / 8)});
    this.moves.forEach(position => {
      const idx = position.y * 8 + position.x;
      this.highlightedTiles[idx] = true;
    });

  }

  drop(ev, tile) {
    ev.preventDefault();
    console.log('drop', ev.targets, tile, this.pos);
    this.pieces[tile.index] = this.pieces[this.pos];
    if (this.pos !== tile.index) {this.pieces[this.pos] = 0};
    this.moves.forEach(position => {
      const idx = position.y * 8 + position.x;
      this.highlightedTiles[idx] = false;
    });
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

}

