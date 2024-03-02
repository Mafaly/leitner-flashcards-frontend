import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CardsService} from "../../services/cards.service";
import {NotificationsService} from "../../shared/notifications.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.page.html',
  styleUrls: ['./create-card.page.scss'],
})
export class CreateCardPage {
  cardForm: FormGroup;

  constructor(private fb: FormBuilder,
              private cardsService: CardsService,
              private notificationService: NotificationsService,
              private router: Router) {
    this.cardForm = this.fb.group({
      question: ['', Validators.required],
      answer: ['', Validators.required],
      tag: ['']
    });
  }

  async submitForm() {
    if (this.cardForm.valid) {
      this.cardsService.createCard(this.cardForm.value).subscribe({
        next: async () => {
          await this.notificationService.successToast("Card succesfully created")
          await this.router.navigate(['/cards-list']);
        },
        error: () => this.notificationService.errorAlert("Error creating card"),
      });
    }else{
      await this.notificationService.errorAlert('Form is not valid. Please check your input.')
    }
  }

}

