import { Component, inject } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-sudoku-play',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sudoku-play.component.html',
  styleUrl: './sudoku-play.component.scss'
})
export class SudokuPlayComponent {
  // private http = inject(HttpClient);

  sudokuBoard: number[][] = [];
  answers: number[][] = [];
  difficulty:string='';


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getSudokuBoard();
  }
  selectedCell: { row: number, col: number } | null = null;
  flashRed: boolean = false;
  isGameWon: boolean = false; // Flag to track game win state

  // ngOnInit(): void {
  //   // Initialize your Sudoku board and answers array
  // }

  // Method to toggle selected cell
  toggleSelected(row: number, col: number): void {
    if (this.selectedCell && this.selectedCell.row === row && this.selectedCell.col === col) {
      // Deselect if clicking on already selected cell
      this.selectedCell = null;
    } else {
      this.selectedCell = { row, col };
    }
  }

  // Method to check if a cell is selected
  isSelected(row: number, col: number): boolean {
    return !!this.selectedCell && this.selectedCell.row === row && this.selectedCell.col === col;
  }

  // Method to fill the selected cell with a number
  fillSelectedCell(num: number): void {
    if (!this.selectedCell) {
        return;
    }

    const { row, col } = this.selectedCell;
    if (this.sudokuBoard[row][col] !== 0) {
        return; // If cell is already filled, do nothing
    }

    // Check if selected number matches the correct answer
    if (num === this.answers[row][col]) {
        this.sudokuBoard[row][col] = num;
        this.selectedCell = null; // Deselect the cell after filling

        // Check for win condition
        this.checkGameWon()
    } else {
        // Incorrect fill indication (flash red)
        this.flashRed = true;
        setTimeout(() => {
            this.flashRed = false;
        }, 200); // Flash duration in milliseconds
    }
}

  // Method to check if the game is won
  checkGameWon(): void {
    // Iterate through the board to check if all cells are correctly filled
    this.isGameWon = true;
    for (let i = 0; i < this.sudokuBoard.length; i++) {
      for (let j = 0; j < this.sudokuBoard[i].length; j++) {
        if (this.sudokuBoard[i][j] !== this.answers[i][j]) {
          this.isGameWon = false;
          return; // Exit early if any cell is incorrect
        }
      }
    }
  }

  // Optional: Method to simulate flashing screen red (for incorrect answers)
  flashScreenRed(): void {
    // Implement your logic to flash the screen red (CSS animation, etc.)
    // Example:
    this.flashRed = true;
    setTimeout(() => {
      this.flashRed = false;
    }, 200); // Reset after 200ms
  }




  getSudokuBoard(): any {


    this.dataService.getNewSudokuBoard().subscribe(
      (res) => {
        if (res?.newboard?.grids?.length > 0) {
          this.sudokuBoard = res.newboard.grids[0].value;
          this.answers = res.newboard.grids[0].solution;
          this.difficulty = res.newboard.grids[0].difficulty;

          console.table(this.sudokuBoard)
          console.table(this.answers)
        } else {
          console.error('Failed to fetch Sudoku board');
        }
      },
      (err) => {
        console.error(err)
      }
    )

  }



}
