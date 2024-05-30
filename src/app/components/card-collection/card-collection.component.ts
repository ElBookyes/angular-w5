import { Component, OnInit, OnChanges } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { CardComponent } from '../card/card.component';
import { RouterLink } from '@angular/router';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-card-collection',
  standalone: true,
  imports: [CardComponent, RouterLink, PaginationComponent],
  templateUrl: './card-collection.component.html',
  styleUrl: './card-collection.component.scss'
})
export class CardCollectionComponent implements OnInit, OnChanges { 
  storedPokemon: Pokemon[] = [];

  // Pagination
  paginatedNotes: Pokemon[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 6;
  totalItems = 0;
  totalPages: number = 0;

  ngOnInit() {
    this.loadSavedPokemon();
  }

  ngOnChanges() {
    this.loadSavedPokemon();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadSavedPokemon();
  }

  loadSavedPokemon() {
    const data = localStorage.getItem('storedPokemon');
    if (data) {
      this.storedPokemon = JSON.parse(data);
    }
    console.log(this.storedPokemon, 'storedPokemon');
  }
}
