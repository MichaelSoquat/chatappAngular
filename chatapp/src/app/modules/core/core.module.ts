import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavComponent } from './main-nav/main-nav.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import { SideNavComponent } from './side-nav/side-nav.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { CreateChannelComponent } from './create-channel/create-channel.component';
import {MatCardModule} from '@angular/material/card';
import { CoreRoutingModule } from './core-routing.module';
import { ButtonsModule } from 'src/app/shared';


const declarations = [
  MainNavComponent,
  SideNavComponent,
  UserInfoComponent,
  CreateChannelComponent
];

@NgModule({
  declarations,
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatExpansionModule,
    MatCardModule,
    CoreRoutingModule,
    ButtonsModule
  ],
  exports: [...declarations],
  
  
 
})

export class CoreModule { }
