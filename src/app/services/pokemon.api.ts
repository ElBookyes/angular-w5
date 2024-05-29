import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private http = inject(HttpClient);

  private _url: string = 'https://api.pokemontcg.io/v2/cards';

  cards: any[] = [];
  cardState = 'hidden';
  packState = 'closed';

  getPokemon(): Observable<any> {
    return this.http.get(this._url);
  }

  getPokemonById(id: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this._url}/${id}`);
  }

  getRandomPokemon(count: number = 5): Observable<Pokemon[]> {
    return this.http.get<{ data: Pokemon[] }>(this._url).pipe(
      map(response => response.data),
      map(allPokemon => {
        const shuffled = allPokemon.sort(() => 0.5 - Math.random());
        localStorage.setItem('storedPokemon', JSON.stringify(shuffled));
        return shuffled.slice(0, count);
      })
    );
  }
}
