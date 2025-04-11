import { Component, inject, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArticleApi } from '../../models/article-api';
import { ArticleService } from '../../services/article.service';
import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Tag } from '../../models/tag';
import { TagComponent } from "../tag/tag.component";
import { TagService } from '../../services/tag.service';
import { TagCloudComponent } from "../../tag-cloud/tag-cloud.component";

@Component({
  selector: 'app-footer',
  imports: [RouterLink, NgFor, NgStyle],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent  {
  articles: ArticleApi[] = [];


  tags: Tag[] = []
  service = inject(TagService);
  


  constructor(private articleService: ArticleService) {}
  ngOnInit(): void {
    this.service.allTags().then((tags:Tag[]) => {
      this.tags = tags
    })
  }
 currentYear = new Date().getFullYear();

  getFontSize(count: number): number {
    return 12 + Math.min(count, 10) * 3;
  }
  
  getColor(count: number): string {
    const colors = ['#6b7280', '#4b5563', '#374151', '#1f2937'];
    return colors[Math.min(count, colors.length - 1)];
  }
  getStyle(tag: Tag) {
    // Simuler une distribution plus centrée pour les gros tags
    const isBig = Math.random() > 0.7;
    
    const safeZone = 20;
    const x = isBig
      ? 40 + Math.random() * 20 // entre 40% et 60%
      : Math.random() * 100;
    const y = isBig
      ? 40 + Math.random() * 20
      : Math.random() * 100;
  
    const fontSize = Math.floor(Math.random() * 20) + 12; // 12 à 36px
    const colors = ['#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899'];
    const color = colors[Math.floor(Math.random() * colors.length)];
  
    return {
      left: `${x}%`,
      top: `${y}%`,
      fontSize: `${fontSize}px`,
      color: color,
      transform: 'translate(-50%, -50%)',
      position: 'absolute',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
     
      
    };
  }
  
  
}