
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-color-grid',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './color-grid.component.html',
  styleUrl: './color-grid.component.scss'
})
export class ColorGridComponent {

  title :string="color grid game"

}
