import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-video',
    templateUrl: './video.component.html' // Fichier HTML associé
})
export class VideoComponent {
    videoUrl: any;

    constructor(private sanitizer: DomSanitizer) {
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/YjgDUw_sbpY?start=650');
    }
}