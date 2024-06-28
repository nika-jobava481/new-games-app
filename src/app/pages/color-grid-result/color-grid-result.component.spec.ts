import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorGridResultComponent } from './color-grid-result.component';

describe('ColorGridResultComponent', () => {
  let component: ColorGridResultComponent;
  let fixture: ComponentFixture<ColorGridResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorGridResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColorGridResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
