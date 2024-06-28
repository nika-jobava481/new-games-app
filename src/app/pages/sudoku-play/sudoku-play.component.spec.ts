import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SudokuPlayComponent } from './sudoku-play.component';

describe('SudokuPlayComponent', () => {
  let component: SudokuPlayComponent;
  let fixture: ComponentFixture<SudokuPlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SudokuPlayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SudokuPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
