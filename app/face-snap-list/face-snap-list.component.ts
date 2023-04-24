import { Component, OnInit, OnDestroy } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { interval, tap, takeUntil, Subject } from 'rxjs';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit, OnDestroy {
  //methode permettant de construire un service avec ses attributs
  constructor(private faceSnapsService: FaceSnapsService) { };
  faceSnaps!: FaceSnap[];
  private destroy$!: Subject<boolean>;
  ngOnInit(): void {
    this.destroy$ = new Subject<boolean>;
    this.faceSnaps = this.faceSnapsService.faceSnaps;
    interval(1000).pipe(
      tap(console.log),
      takeUntil(this.destroy$)
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
