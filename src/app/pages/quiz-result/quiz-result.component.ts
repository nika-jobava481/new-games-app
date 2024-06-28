import { Component } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quiz-result',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './quiz-result.component.html',
  styleUrl: './quiz-result.component.scss'
})
export class QuizResultComponent {
  points: number = 0;
  time: string = ''
  username: string = '';

  constructor(private dataService: DataService, private router: Router) { }

  saveResultsToLocalStorage(): void {

    if (this.username === '') {
      return
    }
    let quizResults = localStorage.getItem('quizResults');

    let resultsArray = quizResults ? JSON.parse(quizResults) : [];

    let newResult = {
      username: this.username,
      points: this.points,
      time: this.time
    };

    resultsArray.push(newResult);

    localStorage.setItem('quizResults', JSON.stringify(resultsArray));
  }

  submit() {
    this.saveResultsToLocalStorage()
    this.dataService.pointResult = 0;
    this.dataService.timeResult = '';
    this.router.navigateByUrl('/quiz/highscores');
  }


  ngOnInit() {
    if (this.dataService.pointResult == 0 || this.dataService.timeResult == '') {

      this.router.navigateByUrl("/quiz")
    }
    this.points = this.dataService.pointResult;
    this.time = this.dataService.timeResult;
  }



}
