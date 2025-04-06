import { Component, Input } from '@angular/core';
import { Tag } from '../../models/tag';

@Component({
  selector: 'app-tag',
  imports: [],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.css'
})
export class TagComponent {
  @Input () tag!: Tag
}
