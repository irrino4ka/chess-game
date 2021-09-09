import { PositionCoord } from './../../core/model';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-tile',
    templateUrl: './tile.component.html',
    styleUrls: ['./tile.component.scss']
})
export class TileComponent {
  position: PositionCoord;

  @Input() set index(value: number) {
    this.position = this.getCoord(value);
  }

  getCoord(i: number): PositionCoord {
    return {
      positionX: i % 8,
      positionY: Math.floor(i / 8)
    }
  }

  getStyle({ positionX, positionY }: PositionCoord) {
    return ((positionX + positionY) % 2 === 1)
        ? { backgroundColor: '#81401e', color: 'black' }
        : { backgroundColor: '#d6cf8d', color: 'white' }
  }

}

