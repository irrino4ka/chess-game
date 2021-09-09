import { PositionCoord, PieceColor } from '../../core/model';

export interface Piece {
  color: PieceColor;
  unicode: string;

  possibleMoves(currentPosition: PositionCoord): Array<PositionCoord>;

}
