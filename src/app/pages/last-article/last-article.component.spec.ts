import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastArticleComponent } from './last-article.component';

describe('LastArticleComponent', () => {
  let component: LastArticleComponent;
  let fixture: ComponentFixture<LastArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastArticleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
