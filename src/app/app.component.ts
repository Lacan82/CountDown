import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Subscription, interval} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  releaseTimes = [new Date(1613786729000), new Date(1613354729000), new Date(1614477929000)];
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

    return new Date(calculatedTime);
  }

}


