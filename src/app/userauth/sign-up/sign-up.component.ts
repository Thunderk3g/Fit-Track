import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
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
