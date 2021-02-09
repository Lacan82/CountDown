import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Subscription, interval} from 'rxjs';
import {createUrlResolverWithoutPackagePrefix} from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  releaseTimes = [new Date(1613786729000), new Date(1613354729000), new Date(1614477929000), new Date(1612717260000), new Date(1612897401000)];
  Timer;

  constructor(private ref: ChangeDetectorRef) {
  }


  ngOnInit(): void {
    const timer = interval(1000);
    const subscribe = timer.subscribe(x => { this.Timer = Date();});
  }

  // tslint:disable-next-line:typedef
  CountDown(releaseTime, Timer) {
    // const release = new Date(releaseTime *  1000);
    const currentTime = new Date(Timer);

    // @ts-ignore
    const calculatedTime = releaseTime.getTime() - currentTime.getTime();
    console.log(calculatedTime);
    const deltaTime = new Date(calculatedTime);
    console.log(deltaTime.getTime() / (1000 * 3600 * 24));
    const daysCalculated = calculatedTime / (1000 * 3600 * 24);
    if (daysCalculated < 0 ) {
      return 'Days 0 00:00:00';
    }
    console.log(deltaTime.getHours());
    console.log(deltaTime.getMinutes());
    console.log(deltaTime.getSeconds());
    const val = `Days: ${daysCalculated.toFixed(0)} ${deltaTime.getHours()}:${deltaTime.getMinutes()}:${deltaTime.getSeconds()} `;
    return val;
  }

}

