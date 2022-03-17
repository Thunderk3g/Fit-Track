import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isList: number | undefined;
  isMenu: boolean = false;
  isLetsGo: boolean = false;
  clicked:boolean =false;
  isMenuBtn() {
    this.isMenu = !this.isMenu;
  }
  isLetsgoBtn(){
    
    this.isLetsGo = !this.isLetsGo;
  }
  isSearch: boolean = false;
  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    
  }

}
