import { PositionCoord } from './../model';
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class ChessService {
  knightPosition$ = new BehaviorSubject<PositionCoord>({ positionX: 3, positionY: 2 });
  currentPosition: PositionCoord;

  constructor() {
    this.knightPosition$.subscribe(xy => {
        this.currentPosition = xy;
    })
}

  moveKnight(value: PositionCoord) {
      this.knightPosition$.next(value);
  }

  canMoveKnight(value: PositionCoord) {
    const { positionX, positionY } = this.currentPosition;
    const dx = value.positionX - positionX;
    const dy = value.positionY - positionY;

    return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
           (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}
}
