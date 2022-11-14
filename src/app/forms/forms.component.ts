import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  firstFormGroup!: FormGroup
  secondFormGroup!: FormGroup
  thirdFormGroup!: FormGroup

  isLinear = false;
  constructor(private _formBuilder: FormBuilder,private http:HttpClient,) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      emailCtrl: ['', [Validators.required, Validators.email]],
      city: ['', Validators.required],
      language: ['', Validators.required]
    });

    this.secondFormGroup = this._formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      exam: ['', Validators.required],
      area: ['', Validators.required],
    });

    this.thirdFormGroup = this._formBuilder.group({
      new: ['', Validators.required],
      product: ['', Validators.required],
      message: ['', Validators.required],
      ever: ['', Validators.required],
      good: ['', Validators.required],
      notification: ['', Validators.required],
    });

  }

  next() {
this.http.post<any>("http://localhost:3000/basic",this.firstFormGroup.value)
.subscribe(res=>{
  alert('basic information successfull');
},err=>{
  alert('basic information is not found');
}
  )
  }

  profile(){
    this.http.post<any>("http://localhost:3000/profiles",this.secondFormGroup.value)
.subscribe(res=>{
  alert('profile successfull');
},err=>{
  alert('profile is not found');
}
)
  }

  notefic(){
    this.http.post<any>("http://localhost:3000/notifications",this.thirdFormGroup.value)
    .subscribe(res=>{
      alert('notification successfull');
    },err=>{
      alert('notification is not found');
    }
    )
  }
  
}