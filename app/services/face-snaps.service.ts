import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";
import { NewFaceSnapComponent } from "../new-face-snap/new-face-snap.component";

@Injectable({
  //permet de preciser que le service est utilisable depuis la racine du projet
  providedIn: 'root'
})

export class FaceSnapsService{
//on ne mets pas de contructeur dans un service pas de methode
//OnInit
addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }) {
  const faceSnap: FaceSnap = {
      ...formValue,
      snaps: 0,
      createdDate: new Date(),
      id: this.faceSnaps[this.faceSnaps.length - 1].id + 1
  };
  this.faceSnaps.push(faceSnap);
}

faceSnaps: FaceSnap[] = [
  {
    id : 1,
    title: 'Archibald',
    description:'Mon meilleur ami depuis tout petit !',
    imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
    createdDate: new Date(),
    snaps: 0
  },
  {
    id : 2,
    title: 'Three Rock Mountain',
    description: 'Un endroit magnifique pour les randonnées.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
    createdDate: new Date(),
    snaps: 0
  },
  {
    id : 3,
    title: 'Un bon repas',
    description: 'Mmmh que c\'est bon !',
    imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
    createdDate: new Date(),
    snaps: 0,
    location: "Paris"
  }
];

//getter du tableau retourne le tableau de snaps
getAllFaceSnaps(): FaceSnap[] {
  return this.faceSnaps;
}

//retrouver un snap dans la liste des snaps
getFaceSnapById(faceSnapId: number): FaceSnap {
  const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
  if (!faceSnap) {
      throw new Error('FaceSnap not found!');
  } else {
      return faceSnap;
  }
}

snapFaceSnapById(faceSnapId: number, snapType: string): void {
  const faceSnap = this.getFaceSnapById(faceSnapId);
  //operateur ternaire pouvant remplacer le if()
  snapType === 'like' ? faceSnap.snaps++ : faceSnap.snaps--;
}

}
