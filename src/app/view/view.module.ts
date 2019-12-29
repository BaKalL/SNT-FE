
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
    IgxSnackbarModule
 } from 'igniteui-angular';
import { ProfileComponent } from './profile/profile.component';

const appRoutes: Routes = [
    { 
        path: '', component: ViewComponent, children:
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
        IgxSnackbarModule,
        IgxAvatarModule ,
        IgxTabsModule ,
        IgxIconModule,
        IgxToggleModule,
        IgxDropDownModule ,
        IgxRippleModule,
        IgxNavbarModule,
        IgxListModule,
        IgxCardModule ,
        IgxInputGroupModule,
        RouterModule.forChild(appRoutes)
    ],
    providers: []
})
export class ViewModule { }