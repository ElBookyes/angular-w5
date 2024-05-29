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


// Make a card pack that opens and shows the cards inside. The cards should be fetched from an API.
// The card pack shines when hovered.
// The card pack is opened when clicked.
// The cards inside the pack should be animated when they are shown.
// The pack should be animated when it is opened.
// The opened cards will be 5 random cards from the API.
// The cards will show their back first and flip on click to show the front.
// Every opened card will be saved into the local storage and displayed in the card collection component.
// The card collection component should show all the opened cards.
// The card collection component should have a button to clear all the cards from the local storage.
// Make an information component where you can search any card by its name, even if you dont have it.
// Make a navigation so the user can navigate between the pack opening, card collection, and information components.