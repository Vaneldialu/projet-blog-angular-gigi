import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtcileVidComponent } from './artcile-vid.component';

describe('ArtcileVidComponent', () => {
  let component: ArtcileVidComponent;
  let fixture: ComponentFixture<ArtcileVidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtcileVidComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtcileVidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
