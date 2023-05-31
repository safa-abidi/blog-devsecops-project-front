import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  showAlert = false;
  author = {
    name:'',
    lastname: '',
    email:'',
    password:'',
    about:''
  }

  image: any;

  select(e:any){
    this.image = e.target.files[0];
  }
  constructor(private _auth: AuthService , private router: Router) { }

  ngOnInit(): void {
  }


  register(form: NgForm){
    if(form.valid){
      let fd = new FormData()
      let val = form.value
      fd.append('name',val.name)
      fd.append('lastname',val.lastname)
      fd.append('email',val.email)
      fd.append('password',val.password)
      fd.append('about',val.about)
      fd.append('image',this.image)

      this._auth.register(fd)
        .subscribe(
          res=>{
            this.router.navigate(['/login']);
          }
        );
    }
    else{
      this.showAlert = true;
    }

  }

}
