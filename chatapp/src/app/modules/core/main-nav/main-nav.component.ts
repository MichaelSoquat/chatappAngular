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
  sideNavBoolean: boolean = false;
  ngOnInit(): void { }

  sideNavToggle() {
    this.sideNavBoolean = !this.sideNavBoolean;
    this.sideNavStatus.next(this.sideNavBoolean);
  }
}
