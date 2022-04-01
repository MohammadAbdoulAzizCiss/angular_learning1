import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap!:FaceSnap;
  constructor(private faceSnapService :FaceSnapService , private route: ActivatedRoute){}
  ngOnInit(): void {
    //empty for now
    this.faceSnap = this.faceSnapService.getFaceSnapById( parseInt( this.route.snapshot.params['id']))
  }
  onSnap(){
    if(this.faceSnap.snapped===true){
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id,'unsnap')
    } else{
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id,'snap')
    }
    this.faceSnap.snapped=!this.faceSnap.snapped;
  }

}
