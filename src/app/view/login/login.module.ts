import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { 
    IgxGridModule, IgxCardModule, IgxIconModule, IgxInputGroupModule, IgxButtonModule
} from 'igniteui-angular';
const route: Routes = [
    { path: '', component: LoginComponent }
]
@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        IgxIconModule,
        IgxCardModule,
        IgxInputGroupModule,
        IgxButtonModule,
        RouterModule.forChild(route),
        IgxGridModule
    ],
    providers: []
})
export class LoginModule { }