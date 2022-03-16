import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Validators ,FormBuilder } from '@angular/forms';
import { PassMatch } from '../../shared/_helpers/pass-match.validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  pass: boolean = false;
  formdata: any;

  constructor(
    public authService: AuthService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.formdata = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm_password: ['', [Validators.required]],
  }, {
      validator: PassMatch('password', 'confirm_password')
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
this.authService.SignUp(this.formdata);
}
}
