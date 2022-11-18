import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
  encapsulation: ViewEncapsulation.None
  
})
export class MainNavComponent implements OnInit {
  constructor() { }

  sidenavStatus: Subject<boolean> = new Subject<boolean>();
  isSidenavOpen: boolean = false;

  ngOnInit(): void { }

  checkSidenavStatus() {
    this.changeSidenavStatus();
    this.emitSidenavStatus(this.isSidenavOpen);
  }

  changeSidenavStatus() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

  emitSidenavStatus(status: boolean) {
    this.sidenavStatus.next(status);
  }
}
