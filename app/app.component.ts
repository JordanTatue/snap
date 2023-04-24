import { Component, OnInit } from '@angular/core';
import { interval, of } from 'rxjs';
import { concatMap, mergeMap, delay, exhaustMap, map, switchMap, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit() {}

}










/*
Observable de haut niveau
redTrainsCalled = 0;
  yellowTrainsCalled = 0;

  ngOnInit() {
    interval(500).pipe(
      take(10),
      map(value => value % 2 === 0 ? 'rouge' : 'jaune'),
      tap(color => console.log(`La lumière s'allume en %c${color}`, `color: ${this.translateColor(color)}`)),
      mergeMap(color => this.getTrainObservable$(color)),
      tap(train => console.log(`Train %c${train.color} ${train.trainIndex} arrivé !`, `font-weight: bold; color: ${this.translateColor(train.color)}`))
    ).subscribe();
  }

  getTrainObservable$(color: 'rouge' | 'jaune') {
    const isRedTrain = color === 'rouge';
    isRedTrain ? this.redTrainsCalled++ : this.yellowTrainsCalled++;
    const trainIndex = isRedTrain ? this.redTrainsCalled : this.yellowTrainsCalled;
    console.log(`Train %c${color} ${trainIndex} appelé !`, `text-decoration: underline; color: ${this.translateColor(color)}`);
    return of({ color, trainIndex }).pipe(
      delay(isRedTrain ? 5000 : 6000)
    );
  }

  translateColor(color: 'rouge' | 'jaune') {
    return color === 'rouge' ? 'red' : 'yellow';
  }






  interval$!: Observable<string>;

  logger(text: string): void {
    console.log(`Log: ${text}`);
  }
  ngOnInit() {
    //methode qui cree un observable qui emet des nombres croissant a intervalle de 1s
    //on passe une fonction  aloperateur map qui multiplie lemssion par 10
    this.interval$ = interval(1000).pipe(
      //filter permet de filtrer ce quon veut
      filter(value => value % 3 == 0),
      //map permet de definir des fonctions pour laffichage
      map(value => value % 2 == 0 ?
        `Je suis ${value} et je suis pair` :
        `Je suis ${value} et je suis impair`
      ),
      //tap permet de creer des effets secondaires sur l'observable
      tap(text => this.logger(text))
    );
  }
  */
