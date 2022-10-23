import { ChangeDetectorRef, Component, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  
})
export class SideNavComponent implements OnInit {
  @Input() sidenavStatus$: Observable<boolean> = new Observable<boolean>();
  @ViewChild('sidenav') matSidenav!: MatSidenav;
  isSidenavOpen: boolean = false;
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
    this.sidenavStatus$.subscribe((status: boolean) => {
      this.toggleSidenav();
      this.setSidenavStatus(status);
    }
    );
  }

  toggleSidenav() {
    this.matSidenav.toggle();
  }

  setSidenavStatus(status: boolean) {
    this.isSidenavOpen = status;
  }
}




