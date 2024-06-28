import { Component } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-color-grid-result',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './color-grid-result.component.html',
  styleUrl: './color-grid-result.component.scss'
})
export class ColorGridResultComponent {

  timer: number = 0;
  username: string = '';

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    if(this.dataService.gridTimeResult == 0){
      this.router.navigateByUrl('/colorgrid');
    }
    this.timer = this.dataService.gridTimeResult;
  }

  saveResultsToLocalStorage(): void {
    if (this.username === '') {
      return;
    }

    let colorGridResults = localStorage.getItem('colorGridResults');
    let resultsArray = colorGridResults ? JSON.parse(colorGridResults) : [];

    let newResult = {
      username: this.username,
      time: this.timer
    };

    resultsArray.push(newResult);

    localStorage.setItem('colorGridResults', JSON.stringify(resultsArray));
  }

  submit(): void {
    this.saveResultsToLocalStorage();
    this.dataService.gridTimeResult = 0;
    this.router.navigateByUrl('/colorgrid/highscores');
  }
}
