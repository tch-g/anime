import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

export interface SignUpForm {
  email: string;
  password: string;
}

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  SingUp({email, password}: SignUpForm){
    if(!email || !password){
      return
    }
  
    this.auth.SingUp({email, password}).then(()=>{
      this.router.navigate(['catalogue']);
    })
  }

  ngOnInit(): void {
  }

}
