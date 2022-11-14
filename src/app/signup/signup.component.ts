import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from'@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupForm!:FormGroup
  submitted=false;
  constructor(private formbuilder:FormBuilder,private http:HttpClient,private router:Router) { }
  ngOnInit(): void {
this.signupForm=this.formbuilder.group({
  firstname:["",Validators.required],
  lastname:["",[Validators.required]],
  email:["",[Validators.required,Validators.email]],
  password:["",[Validators.required]],
  phonenumber:["",[Validators.required]]
})

 }
    signUp(){
      this.submitted=true;
      if(this.signupForm.valid){
        this.http.post<any>(`${environment.baseUrl}signpusers`,this.signupForm.value)
        .subscribe(res=>{
          // alert('signup successfull');
          this.signupForm.reset();
          this.router.navigate(['login']);
        },err=>{
          // alert('something went wrong')
        })
      }else{
        // alert('something went wrong')
      }
     
    }
  }