import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  constructor(private faceSnapService: FaceSnapService, private router: Router) { }
  ngOnInit(): void {
    //empty for now
  }
  onSnap() {
    if (this.faceSnap.snapped === true) {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap')
    } else {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap')
    }
    this.faceSnap.snapped = !this.faceSnap.snapped;
  }
  onViewFaceSnap() {
    this.router.navigateByUrl(`/facesnaps/${this.faceSnap.id}`)
  }
}
