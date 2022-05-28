import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { MyMaterialModule } from  './material.module';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule, MatPaginatorIntl } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { AppComponent } from './app.component';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { MatPaginatorIntlPtbr } from './helpers/material/ptbr-paginator-intl';
import { ModalPlacaComponent } from './search-component/modal_placa/modal-placa.component';

registerLocaleData(localePt);


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponentComponent,
    LoginComponentComponent,
    SearchComponentComponent,
    ModalPlacaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/search', pathMatch: 'full' },
      //{ path: 'register', component: RegistrationComponentComponent },
      //{ path: 'login', component: LoginComponentComponent },
      { path: 'search', component: SearchComponentComponent },
      
    ]),

  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: MatPaginatorIntl, useClass: MatPaginatorIntlPtbr },
  ],
  bootstrap: [AppComponent],
  entryComponents: [ModalPlacaComponent]
})
export class AppModule { }

