import { Component, inject } from '@angular/core';
import { ArticleListComponent } from '../article-list/article-list.component';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isConnected: boolean = false;
  name!: string;
  email!: string;
  route: Router = inject(Router);
  service: UserService = inject(UserService);

  ngOnInit() {
    if (typeof window !== 'undefined' && window.localStorage) {
      this.isConnected = !!localStorage.getItem('token');
      this.name = localStorage.getItem('name') || '';
      this.email = localStorage.getItem('email') || '';
    }
  }

  deconnexion() {
    localStorage.clear();
    this.isConnected = true;
    this.route.navigate(['/']).then(() => {
      window.location.reload();
    });
  }
}

