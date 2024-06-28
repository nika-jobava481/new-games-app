import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-color-grid-play',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './color-grid-play.component.html',
  styleUrl: './color-grid-play.component.scss'
})
export class ColorGridPlayComponent {

  colors: string[] = [];
  timer: number = 0;
  private intervalId: any;
  firstClickIndex: number | null = null;
  isWinner: boolean = false;

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.generateRandomColors();
    this.startTimer();
  }

  generateRandomColors(): void {
    const colorOptions = Array.from({ length: 4 }, () => this.getRandomColor());
    this.colors = [...colorOptions, ...colorOptions, ...colorOptions, ...colorOptions];
    this.shuffleColors(this.colors);
  }

  getRandomColor(): string {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  }

  shuffleColors(array: string[]): void {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  handleCellClick(index: number): void {
    if (this.isWinner) {
      return;
    }
    if (this.firstClickIndex === null) {
      // First cell click
      this.firstClickIndex = index;
    } else {
      // Second cell click
      this.swapColors(this.firstClickIndex, index);
      this.firstClickIndex = null;
      this.checkWinner();
    }
  }

  swapColors(index1: number, index2: number): void {
    const tempColor = this.colors[index1];
    this.colors[index1] = this.colors[index2];
    this.colors[index2] = tempColor;
  }

  checkWinner(): void {
    const rows = [
      this.colors.slice(0, 4),
      this.colors.slice(4, 8),
      this.colors.slice(8, 12),
      this.colors.slice(12, 16)
    ];

    const columns = [
      [this.colors[0], this.colors[4], this.colors[8], this.colors[12]],
      [this.colors[1], this.colors[5], this.colors[9], this.colors[13]],
      [this.colors[2], this.colors[6], this.colors[10], this.colors[14]],
      [this.colors[3], this.colors[7], this.colors[11], this.colors[15]]
    ];

    const isRowWin = rows.every(row => row.every(color => color === row[0]));
    const isColumnWin = columns.every(column => column.every(color => color === column[0]));

    if (isRowWin || isColumnWin) {
      this.isWinner = true;
      clearInterval(this.intervalId); // Stop the timer
      // alert('You win!');
    }
  }

  startTimer(): void {
    this.intervalId = setInterval(() => {
      this.timer++;
    }, 1000);
  }
  
  goToHighScores(){
    this.dataService.gridTimeResult = this.timer
    this.router.navigate(['/colorgrid/result'])
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}