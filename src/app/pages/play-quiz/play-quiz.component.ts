import { Component } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-play-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './play-quiz.component.html',
  styleUrl: './play-quiz.component.scss'
})
export class PlayQuizComponent {
  questions: any[] = []
  step = 0
  questionCount = 0
  points = 0
  isDisabled: boolean = false;

  timer: number = 0;
  timerInterval: any;

  constructor(private dataService: DataService, private router: Router) {

  }

  ngOnInit() {
    this.questions = this.dataService.quizData
    this.step = 1
    this.questionCount = this.questions.length

    this.startTimer();
  }

  getAnswer(correct: boolean) {
    if (correct) {
      this.points++
    }
    this.isDisabled = true;

    setTimeout(() => {
      this.isDisabled = false;
      if (this.step == this.questionCount) {
        this.dataService.pointResult = this.points
        this.dataService.timeResult = this.formatTimer(this.timer)
        this.router.navigateByUrl('/quiz/result');
      }
      this.step++
    }, 1000);
  }

  startTimer(): void {
    // Start the timer counting up every second
    this.timerInterval = setInterval(() => {
      this.timer++;
    }, 1000);
  }

  formatTimer(value: number): string {
    // Format timer value to display in minutes and seconds
    const minutes: number = Math.floor(value / 60);
    const seconds: number = value % 60;
    return `${this.pad(minutes)}:${this.pad(seconds)}`;
  }

  pad(value: number): string {
    // Helper function to pad single digits with leading zeros
    return value < 10 ? '0' + value : value.toString();
  }





  ngOnDestroy(): void {
    // Clear timer interval when component is destroyed to avoid memory leaks
    clearInterval(this.timerInterval);
  }

}
