import { PositionCoord } from './../model';
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class ChessService {
  knightPosition$ = new BehaviorSubject<PositionCoord>({ x: 3, y: 2 });
  currentPosition: PositionCoord;

  constructor() {
    this.knightPosition$.subscribe(xy => {
        this.currentPosition = xy;
    })
}

  // moveKnight(value: PositionCoord) {
  //     this.knightPosition$.next(value);
  // }

  // canMoveKnight(value: PositionCoord) {
  //   const { x, y } = this.currentPosition;
  //   const dx = value.x - x;
  //   const dy = value.y - y;

  //   return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
  //          (Math.abs(dx) === 1 && Math.abs(dy) === 2);
  // }
}
