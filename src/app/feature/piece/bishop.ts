import { PieceColor, PositionCoord } from './../../core/model';
import { Piece } from './piece';

export class Bishop implements Piece {
  color: PieceColor;
  unicode: string;

  constructor(color: PieceColor) {
    this.color = color;
    this.unicode = '♗'
  }

  possibleMoves(pos: PositionCoord): Array<PositionCoord> {
    return [
      {y: 0, x: 0}
    ]
  }

}
