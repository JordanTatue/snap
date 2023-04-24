//classe faceSnap avec ces attributs permettant de creer
//des objets faceSnap

export class FaceSnap {
  //constructeur qui declare et intialise les variables en meme temps
  id!: number;
  title!: string;
  description!: string;
  imageUrl!: string;
  createdDate!: Date;
  snaps!: number;
  //propriete optionnelle
  location?: string;
}
