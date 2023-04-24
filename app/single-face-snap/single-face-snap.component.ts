import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { ActivatedRoute } from '@angular/router';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  aSnap!: string;
  faceSnap!: FaceSnap;
  constructor(private faceSnapsService: FaceSnapsService,
    private route: ActivatedRoute) { };

  onSnap() {
    if (this.aSnap === 'like') {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'like');
      this.aSnap = 'unlike';
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unlike');
      this.aSnap = 'like';
    }
  }

    ngOnInit(): void {
      this.aSnap = 'like';
      const snapId = +this.route.snapshot.params['id'];
      this.faceSnap = this.faceSnapsService.getFaceSnapById(snapId);
    }

  }
