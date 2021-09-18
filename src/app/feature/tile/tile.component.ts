import { Piece } from './../piece/piece';
import { PositionCoord, PieceColor } from './../../core/model';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-tile',
    templateUrl: './tile.component.html',
    styleUrls: ['./tile.component.scss']
})
export class TileComponent {
  position: PositionCoord;
  private indexI: number;

  @Input() set index(value: number) {
    this.position = this.getCoord(value);
    this.indexI = value;
  }

  get index(): number {
    return this.indexI;
  }

  @Input() piece: Piece;
  @Input() higlighted: boolean;

  getCoord(i: number): PositionCoord {
    return {
      x: i % 8,
      y: Math.floor(i / 8)
    }
  }

  getStyle({ x, y }: PositionCoord) {
    if (this.higlighted) {
      return { backgroundColor: 'green' } 
    } else
    return ((x + y) % 2 === 1)
        ? { backgroundColor: '#81401e' }
        : { backgroundColor: '#d6cf8d' }
  }

  getPieceColor(color: PieceColor): any {
    return (color === PieceColor.BLACK) ? { color: 'black' } : { color: 'white' };
  }

}

