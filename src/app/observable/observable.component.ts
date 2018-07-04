import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  combinedTotal: number = 0;
  private pass: Observable<any>;
  private run: Observable<any>;
  teams = [];

  playLoop(observer) {
    let time = this.getRandom(500, 2000);
    setTimeout(() => {
      observer.next({
        team: this.getRandom(0, 2), yards: this.getRandom(0, 30)});

        if (this.combinedTotal < 1000)
          this.playLoop(observer);

    }, time);
  }

  addTotal(team, yards) {
    this.teams[team].total += yards;
  }

  getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  ngOnInit() {
    this.teams.push({passing: 0, running: 0, total: 0});
    this.teams.push({passing: 0, running: 0, total: 0});
    //passing
    this.pass = new Observable(observer => {
      this.playLoop(observer);
    });
    this.pass.subscribe(data=> {
      this.teams[data.team].passing += data.yards;
      this.addTotal(data.team, data.yards);
    });
    //running
    this.run = new Observable(observer => {
      this.playLoop(observer);
    });
    this.run.subscribe(data => {
      this.teams[data.team].running += data.yards;
      this.addTotal(data.team, data.yards);
    });
    //combined
    this.pass.subscribe(data => {
      this.combinedTotal += data.yards;
    });
    this.run.subscribe(data => {
      this.combinedTotal += data.yards;
    });

  }

}
