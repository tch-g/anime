import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  get isEn():boolean{
    return this.isLanguage("en")
  }
  get isKa():boolean{
    return this.isLanguage("ka")
  }

  get isLoggedIn(): boolean{
    return this.auth.isLoggedIn;
  }

 
  constructor(private translateService: TranslateService, private router: Router, private auth: AuthService){
  }
  goToSignIn(){
      this.router.navigate(['sign-in']);
  }
  goToSignUp(){
    this.router.navigate(['sign-up']);
  }
  SignOut(){
    this.auth.SignOut().then(() =>{
      this.router.navigate(['sign-in']);
    })
  }
  catalog(){
    this.router.navigate(['catalogue']);
  }

   private isLanguage(lang: string): boolean{
     const defaultLang = this.translateService.defaultLang;
     const currentLang = this.translateService.currentLang;
     return currentLang ? currentLang === lang : defaultLang === lang;
   }

  useKa(){
    this.translateService.use('ka')
  }
  useEn(){
    this.translateService.use('en')
  }
  

  ngOnInit(): void {
  }

}
