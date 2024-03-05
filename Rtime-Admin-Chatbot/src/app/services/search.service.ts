// search.service.ts

import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchSubject = new BehaviorSubject<string>('');
  public search$ = this.searchSubject.asObservable();

  setSearchTerm (searchTerm: string): void {
    this.searchSubject.next(searchTerm);
  }
}
