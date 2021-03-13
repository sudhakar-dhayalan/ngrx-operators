import { Component, OnDestroy, OnInit } from '@angular/core';

import { interval, Observable, range, Subscription } from 'rxjs'
import { filter, map, take, takeLast, takeWhile } from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  intSubscriptionHolder: Subscription

  constructor() { }

  ngOnInit() {
    // const numbers = range(1, 100);
    // console.log(numbers)
    // const takeFourNumbers = numbers.pipe(takeWhile((numbers, number) => number<=10));
    // takeFourNumbers.subscribe(x => console.log('Next: ', x));

    //this.intSubscriptionHolder = interval(2000).subscribe((val) => { console.log(val)});

    const customeIntervalObserverable = Observable.create(
      (observer) => {
        let count = 0
        setInterval(() => {

          observer.next(count); //success

          if (count > 4) observer.error(new Error('count is greater than 4')); //error

          if (count === 3) observer.complete(); //complete

          count++;
        }, 1000);
      }
    );



    this.intSubscriptionHolder =
      customeIntervalObserverable.pipe(  //PIPE IS FOR CHAINING OBSERVABLE OPERATORS
        filter((data: number) => {
          return data > 1;
        }), 
        map((data: number) => {
          return 'Proceesed data using operators,filter and map ' + (data + 1);
        })
      ).subscribe(
        (data) => { //success handler
          console.log(data);
        },
        erro => { //error handler
          console.log(erro);
        },
        () => { //complete handler
          console.log("completed ! - complete returns no argument")
        }
      )
  }

  ngOnDestroy() {
    this.intSubscriptionHolder.unsubscribe();
  }

}