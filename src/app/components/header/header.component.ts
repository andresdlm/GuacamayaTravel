import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { AngularFireAuth } from '@angular/fire/auth'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private afsAuth: AngularFireAuth) { }

  public isLogged: boolean = true;

  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser(){
    this.authService.isAuth().subscribe( auth => { 
      if (auth){
        console.log("user logged");
        this.isLogged = true;
      } else {
        console.log("NOT user logged");
        this.isLogged = false;
      }
    })
  }

  onLogout(){
    this.afsAuth.auth.signOut();
  }

}
