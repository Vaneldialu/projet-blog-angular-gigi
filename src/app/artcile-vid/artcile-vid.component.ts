import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-artcile-vid',
  imports: [],
  templateUrl: './artcile-vid.component.html',
  styleUrl: './artcile-vid.component.css'
})
export class ArtcileVidComponent {
    videoUrl: any;

    constructor(private sanitizer: DomSanitizer) {
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/YjgDUw_sbpY?start=650');
    }
}