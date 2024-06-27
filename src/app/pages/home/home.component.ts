import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamePreviewComponent } from '../../shared/game-preview/game-preview.component';
import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, GamePreviewComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  gameList: any[] = []

  constructor(private dataService:DataService){

  }


  ngOnInit(){
    this.gameList = this.dataService.gamelist
  }
}
