import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Card} from '../cards/model/card';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private baseUrl = 'http://localhost:3000/cards';

  constructor(private http: HttpClient) { }

  getAllCards(tags?: string[]): Observable<Card[]> {
    let params = new HttpParams();
    tags?.forEach(tag => params = params.append('tags', tag));
    return this.http.get<Card[]>(this.baseUrl, { params });
  }

  createCard(cardData: User): Observable<Card> {
    return this.http.post<Card>(this.baseUrl, cardData);
  }

  getQuizCards(date?: string): Observable<Card[]> {
    const params = date ? new HttpParams().set('date', date) : new HttpParams();

    const url = `${this.baseUrl}/quizz`;
    return this.http.get<Card[]>(url, { params });
  }

  answerCard(cardId: string, isValid: boolean): Observable<void> {
    const url = `${this.baseUrl}/${cardId}/answer`;
    return this.http.patch<void>(url, { isValid });
  }
}


