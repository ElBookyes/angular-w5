import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pokemon } from '../models/pokemon.model'; 

@Injectable({
  providedIn: 'root',
})
export class CardCollectionService { 
  private storageKey = 'pokemonStorage';
  private cardsSource = new BehaviorSubject<Pokemon[]>([]);
  currentCards = this.cardsSource.asObservable();

  getStoredCards(): Pokemon[] {
    const storedCards = localStorage.getItem(this.storageKey);
    return storedCards ? JSON.parse(storedCards) : [];
  }

  updateCards(newCards: Pokemon[]) {
    const currentCards = this.getStoredCards();
    const updatedCards = [...currentCards, ...newCards];
    localStorage.setItem(this.storageKey, JSON.stringify(updatedCards));
    this.cardsSource.next(updatedCards);
  }

  clearCards() {
    localStorage.removeItem(this.storageKey);
    this.cardsSource.next([]);
  }
}
