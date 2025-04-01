import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleByCategoryComponent } from './article-by-category.component';

describe('ArticleByCategoryComponent', () => {
  let component: ArticleByCategoryComponent;
  let fixture: ComponentFixture<ArticleByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleByCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
