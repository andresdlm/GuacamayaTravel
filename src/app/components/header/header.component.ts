import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private afsAuth: AngularFireAuth, private router: Router) { }

  public isLogged: boolean = true;

  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser(){
    this.authService.isAuth().subscribe( auth => { 
      if (auth){
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }
    })
  }

  onLogout(){
    this.afsAuth.auth.signOut();
    this.router.navigate(['']);
  }

}
