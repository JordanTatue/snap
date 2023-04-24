import { Component, OnInit, Input, inject } from '@angular/core';
import { FaceSnap } from '../../models/face-snap.model';
import { FaceSnapsService } from 'src/app/services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  //selecteur qui va permettre dappeler
  //le code HTML
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent {
  aSnap!: string;
  @Input() faceSnap!: FaceSnap;
  constructor(private faceSnapsService: FaceSnapsService, private router: Router) { };

  //constructeur par default de la classe
  ngOnInit() {
    this.aSnap = 'like';
  }
  //modificateur du nombre
  onSnap() {
    if (this.aSnap === 'like') {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'like');
      this.aSnap = 'unlike';
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unlike');
      this.aSnap = 'like';
    }
  }

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
}


}
