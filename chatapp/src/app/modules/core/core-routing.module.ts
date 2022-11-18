import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateChannelComponent } from './create-channel/create-channel.component';
import { MainNavComponent } from './main-nav/main-nav.component';

const routes: Routes = [
    { path: 'create-channel', component: CreateChannelComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule { }