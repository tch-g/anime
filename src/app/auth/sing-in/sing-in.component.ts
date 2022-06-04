import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


export interface SignInForm {
  email: string;
  password: string;
}

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }

  SingIn({email, password}: SignInForm){
   if(!email || !password){
     return
   }
  this.auth.SingIn({ email, password }).then(()=>{
    this.router.navigate(['catalogue'])
  })
  }
  ngOnInit(): void {
  }

}
