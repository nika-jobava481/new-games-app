import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { sortByProperty } from "basic-utility-belt"

@Component({
  selector: 'app-quiz-highscores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz-highscores.component.html',
  styleUrl: './quiz-highscores.component.scss'
})
export class QuizHighscoresComponent {

  highScores: any[] = [];

  ngOnInit(): void {
    this.loadHighScores();
  }

  loadHighScores(): void {
    const quizResults = localStorage.getItem('quizResults');

    if (quizResults) {
      this.highScores = JSON.parse(quizResults);
      this.highScores = sortByProperty(this.highScores, "points").reverse()
    }
  }
}
