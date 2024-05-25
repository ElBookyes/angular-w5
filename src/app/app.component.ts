import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PackOpeningSectionComponent } from './components/pack-opening-section/pack-opening-section.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PackOpeningSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [HttpClientModule]
})
export class AppComponent {
  title = 'angular-w5';
}


