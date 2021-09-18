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

    const result = [];


    let p = {
      x: pos.x,
      y: pos.y
    };

    while (p.x > 0 && p.y > 0) {
      p = {
        x: p.x,
        y: p.y
      };
      p.x--;
      p.y--;
      result.push(p);
    }

    p = {
      x: pos.x,
      y: pos.y
    };
    while (p.x < 7 && p.y > 0) {
      p = {
        x: p.x,
        y: p.y
      };
      p.x++;
      p.y--;
      result.push(p);
    }

    p = {
      x: pos.x,
      y: pos.y
    };
    while (p.x > 0 && p.y < 7) {
      p = {
        x: p.x,
        y: p.y
      };
      p.x--;
      p.y++;
      result.push(p);
    }

    p = {
      x: pos.x,
      y: pos.y
    };
    while (p.x < 7 && p.y < 7) {
      p = {
        x: p.x,
        y: p.y
      };
      p.x++;
      p.y++;
      result.push(p);
    }


    return result;
  }

}
