import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainNavComponent implements OnInit {
  constructor() { }
  
  sideNavStatus: Subject<boolean> = new Subject<boolean>();
  isSidenavOpen: boolean = false;

  ngOnInit(): void { }

  checkSidenavStatus() {
    this.toggleSidenav();
    this.emitSidenavStatus(this.isSidenavOpen);
  }

  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

  emitSidenavStatus(status: boolean) {
    this.sideNavStatus.next(this.isSidenavOpen);
  }
}
