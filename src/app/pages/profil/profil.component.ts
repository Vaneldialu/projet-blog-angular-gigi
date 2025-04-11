import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profil',
  imports: [],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent {
  service:UserService | any = inject(UserService);
nom!: string;
email!: string;

ngOnInit(){
 this.service.getInfoUser().then((data: any) => { 
    this.nom = data.name;
    this.email = data.email;
 });  
}
}
