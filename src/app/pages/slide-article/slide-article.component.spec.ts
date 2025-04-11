import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideArticleComponent } from './slide-article.component';

describe('SlideArticleComponent', () => {
  let component: SlideArticleComponent;
  let fixture: ComponentFixture<SlideArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideArticleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
