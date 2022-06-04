import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { SignInForm } from '../auth/sing-in/sing-in.component';
import { SignUpForm } from '../auth/sing-up/sing-up.component';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _user: any;

  get isLoggedIn(): boolean{
    return !!this._user;
  }

  get userId(): any {
    return this._user.uid
  }
  

  constructor(private auth: AngularFireAuth, private router: Router) { 
   this.auth.onAuthStateChanged((user)=>{
     this._user = user;
   })
  }



  SingIn({email, password}: SignInForm){
   return this.auth.signInWithEmailAndPassword(email, password)
   }

    SingUp({email, password}: SignUpForm){
    return this.auth.createUserWithEmailAndPassword(email, password)
  }
  SignOut(){
    return this.auth.signOut();
  }

}


