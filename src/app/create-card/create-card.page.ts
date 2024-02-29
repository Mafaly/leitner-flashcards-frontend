import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {CardsService} from "../services/cards.service";


@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.page.html',
  styleUrls: ['./create-card.page.scss'],
})
export class CreateCardPage {
  cardForm: FormGroup;

  constructor(private fb: FormBuilder, private cardsService: CardsService) {
    this.cardForm = this.fb.group({
      question: ['', Validators.required],
      answer: ['', Validators.required],
      tag: ['']
    });
  }


  submitForm() {
    if (this.cardForm.valid) {
      this.cardsService.createCard(this.cardForm.value).subscribe({
        next: (res) => {
          alert('Card created successfully');
        },
        error: (e) => {
          alert('Error creating card');
        },
        complete: () => console.log('Creation of card complete')
      });
    }else{
      alert('Form is not valid. Please check your input.')
    }
  }


}

