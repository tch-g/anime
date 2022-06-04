import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TranslateModule,TranslateLoader} from '@ngx-translate/core';
import{ HttpClient, HttpClientModule } from '@angular/common/http';
import{ AngularFireModule } from '@angular/fire/compat';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ShellModule } from './shell/shell.module';
import { environment } from 'src/environments/environment';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

export function createTranslateLoader(http: HttpClient):TranslateHttpLoader {
  return new TranslateHttpLoader(http, 'assets/i18n/');
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, 
    BrowserAnimationsModule, 
    ToastrModule.forRoot(), 
    ShellModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
      },
      defaultLanguage: 'ka'
  }),
  AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
