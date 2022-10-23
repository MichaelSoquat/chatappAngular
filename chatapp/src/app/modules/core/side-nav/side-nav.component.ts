import { ChangeDetectorRef, Component, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SideNavComponent implements OnInit {
  @Input() sideNavStatus$: Observable<boolean> = new Observable<boolean>();
  @ViewChild('sidenav') matSidenav!: MatSidenav;
  isPublicChannelOpen: boolean = false;
  isPrivateChannelOpen: boolean = false;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.detectChanges();
    this.getNavEvent()
  }

  detectChanges() {
    this.cd.detectChanges();
  }

  getNavEvent() {
    this.sideNavStatus$.subscribe((status) => {
      this.matSidenav.toggle();
    });
  }
}




