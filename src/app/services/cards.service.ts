import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {CardUserData} from "../models/card-user-data";
import {Card} from "../cards/model/card";

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

  createCard(cardData: CardUserData): Observable<Card> {
    return this.http.post<Card>(this.baseUrl, cardData);
  }

  getQuizCards(date?: string): Observable<Card[]> {
    const params = date ? new HttpParams().set('date', date) : new HttpParams();

    const url = `${this.baseUrl}/quizz`;
    return this.http.get<Card[]>(url, { params }).pipe(catchError(this.handleError));
  }

  answerCard(cardId: string, isValid: boolean): Observable<void> {
    const url = `${this.baseUrl}/${cardId}/answer`;
    return this.http.patch<void>(url, { isValid });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 404) {
      alert("Quiz not found or access not allowed.");
    } else {
      alert("An error occurred while retrieving the quiz.");
    }
    return throwError(()=>new Error("An error occurred; please try again later."))
  }
}
