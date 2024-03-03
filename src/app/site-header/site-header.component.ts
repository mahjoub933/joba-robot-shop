import { Component, OnInit } from '@angular/core';
import { IUser } from '../user/user.model';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit {

  user : IUser | null =null;

  showSignOutMenu : boolean = false

  constructor( private userSrv : UserService) { }

  ngOnInit(){
    this.userSrv.getUser().subscribe({
      next : (user) =>
      {this.user=user}
    })
  }

  toggleSignOutMenu(){
    this.showSignOutMenu= !this.showSignOutMenu;
  }

  signOut(){
    this.userSrv.signOut();
    this.showSignOutMenu= false;
  }

}
