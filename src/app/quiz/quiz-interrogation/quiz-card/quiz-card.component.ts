import {Component, Input} from '@angular/core';
import {Card} from "../../../cards/model/card";
import {FormControl, Validators} from "@angular/forms";
import {CardsService} from "../../../services/cards.service";
import {NotificationsService} from "../../../shared/notifications.service";

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.scss'],
})
export class QuizCardComponent {
  @Input() card!: Card;
  answer = new FormControl('', [Validators.required]);
  compareAnswer = false;
  answered = false;
  answeredCorrectly = false;

  constructor(private notificationService: NotificationsService, private cardsService: CardsService) {
  }

  async showAnswer() {
    if (!this.answer.valid) {
      await this.notificationService.errorToast('Please provide an answer');
      return;
    }
    this.compareAnswer = true;
  }

  submitAnswer(isCorrect: boolean) {

    this.cardsService.answerCard(this.card.id, isCorrect).subscribe({
      next: () => {
        this.answered = true;
        this.answeredCorrectly = isCorrect;
      },
      error: () => {
        this.notificationService.errorAlert('An error occurred while submitting the answer');
      }
    });
  }

}
