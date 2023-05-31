import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showAlert = false;
  author={
    email:'',
    password:''
  }

  constructor(private _auth: AuthService , private router: Router) { }

  ngOnInit(): void {
  }

  token : any;
  login(form : NgForm){

    if(form.valid){
      let val = form.value
      this.author.email = val.email
      this.author.password = val.password
      this._auth.login(this.author)
        .subscribe(
          res=>{

            this.token = res;
            localStorage.setItem('token' , this.token.myToken)
            this.router.navigate(['/home']);

          },
          err=>{
            console.log(err);

          }
        );
    }
    else{
      this.showAlert = true
    }


  }

}
