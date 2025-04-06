import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './pages/header/header.component';
import { DomSanitizer } from '@angular/platform-browser';
import { FooterComponent } from "./pages/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog-odc-exo';

  constructor(private sanitizer: DomSanitizer) {
    this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/YjgDUw_sbpY?start=650');
}
}
