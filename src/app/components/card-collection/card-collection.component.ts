import { Component, OnInit, inject, OnDestroy } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { CardComponent } from '../card/card.component';
import { RouterLink } from '@angular/router';
import { PaginationComponent } from '../pagination/pagination.component';
import { CardCollectionService } from '../../services/card-collection.service';

@Component({
  selector: 'app-card-collection',
  standalone: true,
  imports: [CardComponent, RouterLink, PaginationComponent],
  templateUrl: './card-collection.component.html',
  styleUrl: './card-collection.component.scss'
})
export class CardCollectionComponent implements OnInit, OnDestroy { 
  storedPokemon: Pokemon[] = [];

  // Pagination
  paginatedPokemon: Pokemon[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 12;
  totalItems = 0;
  totalPages: number = 0;

  startIndex = (this.currentPage - 1) * this.itemsPerPage;
  endIndex = this.startIndex + this.itemsPerPage;

  private cardCollectionService = inject(CardCollectionService);

  ngOnInit(): void {
    document.body.classList.add('body-overflow-visible');
    this.loadSavedPokemon();
    this.getPaginatedPokemon();
    this.totalItems = this.getTotalPokemon();
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    console.log(this.paginatedPokemon, 'paginatedPokemon')
  }

  ngOnDestroy(): void {
    document.body.classList.remove('body-overflow-visible');
  }

  getTotalPokemon(): number {
    return this.storedPokemon.length;
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadSavedPokemon();
    this.getPaginatedPokemon();
  }

  loadSavedPokemon(): void {
    this.cardCollectionService.currentCards.subscribe((cards) => {
      this.storedPokemon = cards;
    });
  }

  getPaginatedPokemon(): void {
    this.startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.endIndex = this.startIndex + this.itemsPerPage;
    this.paginatedPokemon = this.storedPokemon.slice(this.startIndex, this.endIndex);
  }

  clearButton(): void {
    localStorage.clear();
    window.location.reload();
  }
}
