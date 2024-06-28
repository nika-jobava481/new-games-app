import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { sortByProperty } from "basic-utility-belt";

@Component({
  selector: 'app-color-grid-highscores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './color-grid-highscores.component.html',
  styleUrl: './color-grid-highscores.component.scss'
})
export class ColorGridHighscoresComponent {

  highScores: any[] = [];

  ngOnInit(): void {
    this.loadHighScores();
  }

  loadHighScores(): void {
    const quizResults = localStorage.getItem('colorGridResults');

    if (quizResults) {
      this.highScores = JSON.parse(quizResults);
      this.highScores = sortByProperty(this.highScores, "time")
    }
  }

}
