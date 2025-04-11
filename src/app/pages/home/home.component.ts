import { Component } from '@angular/core';
import { SlideArticleComponent } from '../slide-article/slide-article.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SlideArticleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
