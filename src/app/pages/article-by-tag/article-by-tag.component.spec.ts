import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleByTagComponent } from './article-by-tag.component';

describe('ArticleByTagComponent', () => {
  let component: ArticleByTagComponent;
  let fixture: ComponentFixture<ArticleByTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleByTagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleByTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
