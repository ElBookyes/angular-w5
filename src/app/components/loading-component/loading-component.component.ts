import { Component } from '@angular/core';

@Component({
  selector: 'app-loading-component',
  standalone: true,
  imports: [],
  template: `
    <div class="spinner"></div>
  `,
  styleUrl: './loading-component.component.scss'
})
export class LoadingComponentComponent {}
