import { PieceColor, PositionCoord } from './../../core/model';
import { Piece } from './piece';

export class King implements Piece {
  color: PieceColor;
  unicode: string;

  constructor(color: PieceColor, unicode: string) {
    this.color = color;
    this.unicode = unicode
  }

  possibleMoves(pos: PositionCoord): Array<PositionCoord> {
    return [
      {y: 0, x: 0}
    ]
  }

}
