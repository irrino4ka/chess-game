import { Piece } from './../piece/piece';
import { PositionCoord, PieceColor } from './../../core/model';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-tile',
    templateUrl: './tile.component.html',
    styleUrls: ['./tile.component.scss']
})
export class TileComponent {
  positionValue: PositionCoord;

  @Input() set position({x, y}) {
    this.positionValue = {x: x, y: y};
  }
  get position(): PositionCoord {
    return this.positionValue;
  }
  @Input() piece: Piece;
  @Input() higlighted: boolean;

  getStyle({ x, y }: PositionCoord) {
    if (this.higlighted) {
      return { backgroundColor: '#549054b3' } 
    } else
    return ((x + y) % 2 === 1)
        ? { backgroundColor: '#81401e' }
        : { backgroundColor: '#d6cf8d' }
  }

  getPieceColor(color: PieceColor): any {
    return (color === PieceColor.BLACK) ? { color: 'black' } : { color: 'white' };
  }

}

