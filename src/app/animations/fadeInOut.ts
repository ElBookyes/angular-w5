import { trigger, transition, style, animate } from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
  transition(':enter', [
    style({ opacity: 0, transform: 'scale(0.8)' }),
    animate('250ms', style({ opacity: 1, transform: 'scale(1)' })),
  ]),
]);