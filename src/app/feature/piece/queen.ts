import { PieceColor, PositionCoord } from './../../core/model';
import { Piece } from './piece';

export class Queen implements Piece {
  color: PieceColor;
  unicode: string;

  constructor(color: PieceColor, unicode: string) {
    this.color = color;
    this.unicode = unicode
  }

  possibleMoves(pos: PositionCoord): Array<PositionCoord> {
    return [
      {positionY: 0, positionX: 0}
    ]
  }

}
