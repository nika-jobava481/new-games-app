import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-game-preview',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './game-preview.component.html',
  styleUrl: './game-preview.component.scss'
})
export class GamePreviewComponent {
  @Input() gameObj:any={name:"placeholder..."};

}
