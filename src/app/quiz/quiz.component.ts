import { Component, OnInit } from '@angular/core';
import { CardsService } from '../services/cards.service'; // Adjust the path as necessary
import { Card } from '../models/card';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  cards: Card[] = [];
  cardUserData: { [key: string]: { answer: string } } = {};

  constructor(private cardsService: CardsService) {}

  ngOnInit() {
    this.loadQuizCards();
  }

  loadQuizCards(date?: string) {
    this.cardsService.getQuizCards(date).subscribe({
      next: (cards) => {
        this.cards = cards;
        cards.forEach(card => {
          this.cardUserData[card.id] = { answer: '' };
        });
      },
      error: (err) => console.error(err),
    });
  }

  submitAnswer(cardId: string, userAnswer: string) {
    const correctAnswer = this.cards.find(card => card.id === cardId)?.answer;
    const isValid = userAnswer === correctAnswer;

    this.cardsService.answerCard(cardId, isValid).subscribe({
      next: () => {
        if (isValid) {
          alert('Correct!');
        } else {
          alert('Incorrect. Try again!');
        }
        this.cardUserData[cardId].answer = '';
      },
      error: (err) => console.error(err),
    });
  }


  validateAnyway(cardId: string) {
    this.cardsService.answerCard(cardId, true).subscribe({
      next: () => {
        alert('Card validated!');
        this.cardUserData[cardId].answer = ''; // Optionally clear the answer
      },
      error: (err) => console.error(err),
    });
  }

}




