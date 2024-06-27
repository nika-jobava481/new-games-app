import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizHighscoresComponent } from './quiz-highscores.component';

describe('QuizHighscoresComponent', () => {
  let component: QuizHighscoresComponent;
  let fixture: ComponentFixture<QuizHighscoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizHighscoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuizHighscoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
