import { Component, inject } from '@angular/core';
import { TagService } from '../../services/tag.service';
import { Tag } from '../../models/tag';
import { RouterLink } from '@angular/router';
import { TagComponent } from '../tag/tag.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tag-list',
  imports: [RouterLink, TagComponent, NgFor],
  templateUrl: './tag-list.component.html',
  styleUrl: './tag-list.component.css'
})
export class TagListComponent {
  service: TagService = inject(TagService)
  tags!: Tag[]

  ngOnInit(): void {
      this.service.allTags().then((tagsApi:Tag[]) => {
        this.service.tags = tagsApi
        this.tags = tagsApi
      })
    }

}
