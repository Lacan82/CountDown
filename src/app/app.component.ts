import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Subscription, interval, BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  releaseTimes = [new Date(1613783224 * 1000), new Date(1614474424 * 1000), new Date(1613351224 * 1000)];
  Timer;

  constructor(private ref: ChangeDetectorRef) {
  }


  ngOnInit(): void {
    const timer = interval(1000);
    const subscribe = timer.subscribe(x => { console.log(Date()); this.Timer = Date();});
  }

  // tslint:disable-next-line:typedef
  CountDown(releaseTime, Timer) {
    // const release = new Date(releaseTime *  1000);
    // @ts-ignore
    const calculatedTime = releaseTime - new Date(Timer);
    console.log(typeof(releaseTime));

    return new Date(calculatedTime);
  }

}


