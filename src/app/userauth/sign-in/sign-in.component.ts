import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  pass: boolean = false;
 
  constructor(
    public authService: AuthService
    ) { }

  ngOnInit(): void {
  }
  clickEvent() {
    this.pass = !this.pass;
}
}
