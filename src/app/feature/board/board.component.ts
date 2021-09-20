import { Bishop } from './../piece/bishop';
import { Knight } from './../piece/knight';
import { Rook } from './../piece/rook';
import { PieceColor, PositionCoord } from './../../core/model';
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

  coordValue = {x: 0, y: 0};

  pos: PositionCoord;

  matrixRange = range(64);
  range1 = range(8);
  range2 = range(8);
  pieces = [...Array(8)].map(x=>Array(8).fill(0));
  moves: any;
  highlightedTiles = [...Array(8)].map(x=>Array(8).fill(0));

  constructor(private chessService: ChessService) {
    console.log(this.pieces);

    for (let i = 0; i < 8; i++) {
      this.pieces[1][i] = new Pawn(PieceColor.BLACK);
    }

    for (let i = 0; i < 8; i++) {
      this.pieces[6][i] = new Pawn(PieceColor.WHITE);
    }

    this.pieces[0][0] = new Rook(PieceColor.BLACK);
    this.pieces[0][7] = new Rook(PieceColor.BLACK);
    this.pieces[7][0] = new Rook(PieceColor.WHITE);
    this.pieces[7][7] = new Rook(PieceColor.WHITE);

    this.pieces[0][1] = new Knight(PieceColor.BLACK);
    this.pieces[0][6] = new Knight(PieceColor.BLACK);
    this.pieces[7][1] = new Knight(PieceColor.WHITE);
    this.pieces[7][6] = new Knight(PieceColor.WHITE);

    this.pieces[0][2] = new Bishop(PieceColor.BLACK);
    this.pieces[0][5] = new Bishop(PieceColor.BLACK);
    this.pieces[7][2] = new Bishop(PieceColor.WHITE);
    this.pieces[7][5] = new Bishop(PieceColor.WHITE);

    this.pieces[0][3] = new Queen(PieceColor.BLACK);
    this.pieces[7][3] = new Queen(PieceColor.WHITE);
    this.pieces[0][4] = new King(PieceColor.BLACK);
    this.pieces[7][4] = new King(PieceColor.WHITE);

  }

  clickTile(ev: any, x: number, y: number) {
    this.highlightedTiles = [...Array(8)].map(x=>Array(8).fill(0));
    console.log(this.highlightedTiles);
    this.highlightedTiles[x][y] = true;
    this.pos = {x, y};

    if (this.pieces[x][y]){
      this.moves = this.pieces[x][y].possibleMoves({x, y});
      this.moves.forEach(p => {
        console.log(p);
        this.highlightedTiles[p.x][p.y] = true;
      });
    }
  }

  drag(ev, x: number, y: number) {
    this.pos = {x, y};
    if (this.pieces[x][y]){
      this.moves = this.pieces[x][y].possibleMoves({x, y});
      this.moves.forEach(p => {
        console.log(p);
        this.highlightedTiles[p.x][p.y] = true;
      });
    }

  }

  drop(ev, tile) {
    ev.preventDefault();
    console.log('drop', ev.targets, tile, this.pos);
    this.pieces[tile.position.x][tile.position.y] = this.pieces[this.pos.x][this.pos.y];
    if (this.pos.x !== tile.position.x && this.pos.x !== tile.position.x ) {this.pieces[this.pos.x][this.pos.y] = 0};
    this.moves.forEach(p => {
      this.highlightedTiles[p.x][p.y] = false;
    });
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  getCoord(x: number, y: number): PositionCoord {
    return { x, y };
  }
}

