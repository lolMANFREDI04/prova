import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CardComponent } from './card/card.component';
import { TempAxiosComponent } from './temp-axios/temp-axios.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { ClickstoppropagationComponent } from './utils/clickstoppropagation/clickstoppropagation.component';


import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CardComponent,
    TempAxiosComponent,
    LoginRegisterComponent,
    ClickstoppropagationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    NgIf,
    FormsModule,
    MatFormFieldModule,
    MatDividerModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatListModule,
    MatExpansionModule,
    MatSelectModule,
    MatCardModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
