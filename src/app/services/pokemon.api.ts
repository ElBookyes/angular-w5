import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private http = inject(HttpClient);

  getPokemon(): Observable<any> {
    return this.http.get('https://api.pokemontcg.io/v2/cards')
  }
}
