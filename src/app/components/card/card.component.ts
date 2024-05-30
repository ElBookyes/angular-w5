import { Component, Input } from '@angular/core';
import { fadeInOut } from '../../animations/fadeInOut';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  animations: [fadeInOut]
})
export class CardComponent {
  @Input() pokeName!: string;
  @Input() pokeImg!: string;
}
