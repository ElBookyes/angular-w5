import { Routes } from '@angular/router';
import { PackOpeningSectionComponent } from './components/pack-opening-section/pack-opening-section.component';
import { CardCollectionComponent } from './components/card-collection/card-collection.component';

export const routes: Routes = [
  {
    path: '',
    component: PackOpeningSectionComponent,
  },
  {
    path: 'card-collection',
    component: CardCollectionComponent,
  }
];
