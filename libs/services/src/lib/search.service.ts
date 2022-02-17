import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public enterValueSubject = new Subject();

  searchMovies(enterValue: string) {
    console.log(enterValue)
    this.enterValueSubject.next(enterValue);
  }
}
