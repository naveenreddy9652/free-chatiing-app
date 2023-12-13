import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginComponent } from './login/login.component';
import { CreateNewBatchComponent } from './create-new-batch/create-new-batch.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'mainPage', component:MainPageComponent},
  {path:'', component:CreateNewBatchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
