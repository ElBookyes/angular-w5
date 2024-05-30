import { trigger, transition, style, animate } from '@angular/animations';

export const fadeOut = trigger('fadeOut', [
  transition(':enter', [
    style({ opacity: 1, transform: 'scale(1)' }),
    animate('250ms', style({ opacity: 0, transform: 'scale(0)' })),
  ]),
]);