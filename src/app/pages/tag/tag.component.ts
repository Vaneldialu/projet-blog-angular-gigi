import { Component, Input } from '@angular/core';
import { Tag } from '../../models/tag';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tag',
  imports: [RouterLink],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.css'
})
export class TagComponent {
  @Input () tag!: Tag
}
