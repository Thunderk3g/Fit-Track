import { Component, OnInit } from '@angular/core';
import { Validators ,FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  pass: boolean = false;
  formdata: any ={};

  constructor(
    public authService: AuthService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.formdata = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
  });
  }
  get f() { return this.formdata.controls; }

  clickEvent() {
    this.pass = !this.pass;
}
onSubmit(){
  if (this.formdata.invalid) {
    return;
}
  this.authService.SignIn(this.formdata); 
}
}
