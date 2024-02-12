import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { TempAxiosComponent } from './temp-axios/temp-axios.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginRegisterComponent } from './login-register/login-register.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home', component: NavBarComponent, children: [
    {path:'', component: CardComponent},
    {path:'dettagli/:val', component: TempAxiosComponent}
  ]},
  {path:'login', component: LoginRegisterComponent},
  { path: '**', redirectTo: 'home' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
