
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view.component';
import { MainComponent } from './main/main.component';
import { 
    IgxNavigationDrawerModule,
    IgxButtonModule,
    IgxIconModule,
    IgxToggleModule,
    IgxRippleModule,
    IgxNavbarModule,
    IgxTabsModule ,
    IgxListModule ,
    IgxCardModule ,
    IgxInputGroupModule,
    IgxAvatarModule ,
    IgxDropDownModule ,
    IgxTooltipModule,
    IgxDialogModule
 } from 'igniteui-angular';
import { AuthGuard } from '../guard/auth.guard';
import { ProfileComponent } from './profile/profile.component';
const appRoutes: Routes = [
    { 
        path: '', 
        component: ViewComponent, 
        canActivate: [AuthGuard],
        children:
        [
            {path: '', redirectTo: 'newsfeed', pathMatch: 'full'},
            {path: 'newsfeed', component: MainComponent},
            {path: 'profile/:id', component: ProfileComponent}
        ]
    }

  ];

@NgModule({
    declarations: [
        ViewComponent,
        MainComponent,
        ProfileComponent
    ],
    imports: [
        CommonModule,
        IgxNavigationDrawerModule,
        IgxButtonModule,
        IgxAvatarModule ,
        IgxTabsModule ,
        IgxIconModule,
        IgxToggleModule,
        IgxDialogModule,
        IgxDropDownModule ,
        IgxRippleModule,
        IgxNavbarModule,
        IgxListModule,
        IgxCardModule ,
        IgxTooltipModule,
        IgxInputGroupModule,
        RouterModule.forChild(appRoutes)
    ],
    providers: []
})
export class ViewModule { }