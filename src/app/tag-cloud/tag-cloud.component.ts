import { Component, inject, Input } from '@angular/core';
import { TagService } from '../services/tag.service';
import { Tag } from '../models/tag';
import { FooterComponent } from "../pages/footer/footer.component";

@Component({
  selector: 'app-tag-cloud',
  imports: [FooterComponent],
  templateUrl: './tag-cloud.component.html',
  styleUrl: './tag-cloud.component.css'
})
export class TagCloudComponent {

}
