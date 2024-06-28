import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorGridPlayComponent } from './color-grid-play.component';

describe('ColorGridPlayComponent', () => {
  let component: ColorGridPlayComponent;
  let fixture: ComponentFixture<ColorGridPlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorGridPlayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColorGridPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
