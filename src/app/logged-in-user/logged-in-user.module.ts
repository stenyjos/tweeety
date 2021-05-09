import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { ViewTweetsComponent } from './view-tweets/view-tweets.component';
import { FormsModule } from '@angular/forms';
import { ViewUsersComponent } from './view-users/view-users.component';
import { ViewAllTweetsComponent } from './view-all-tweets/view-all-tweets.component';

const routes: Routes = [
  { path: '', redirectTo: '/user/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: UserDashboardComponent }
];

@NgModule({
  declarations: [UserDashboardComponent, ViewTweetsComponent, ViewUsersComponent, ViewAllTweetsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ButtonModule,
    InputTextareaModule,
    FormsModule
  ]
})
export class LoggedInUserModule { }
