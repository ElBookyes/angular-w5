import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-explode-animation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './explode-animation.component.html',
  styleUrl: './explode-animation.component.scss'
})
export class ExplodeAnimationComponent {
  isAnimating = false;

  animateCircle() {
    this.isAnimating = false;
    // Allow the DOM to update so the animation can restart
    setTimeout(() => {
      this.isAnimating = true;
    }, 0);
  }
}
