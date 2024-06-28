import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorGridHighscoresComponent } from './color-grid-highscores.component';

describe('ColorGridHighscoresComponent', () => {
  let component: ColorGridHighscoresComponent;
  let fixture: ComponentFixture<ColorGridHighscoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorGridHighscoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColorGridHighscoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
