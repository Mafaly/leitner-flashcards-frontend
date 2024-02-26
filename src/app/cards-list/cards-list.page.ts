import {Component, OnInit} from '@angular/core';
import {Card} from "../models/card";
import {CardsService} from "../services/cards.service";

@Component({
  selector: 'app-tab1',
  templateUrl: 'cards-list.page.html',
  styleUrls: ['cards-list.page.scss']
})
export class CardsListPage implements OnInit {
  cards: Card[] = [];

  constructor(private cardsService: CardsService) {}

  ngOnInit() {
    this.fetchCards();
  }

  fetchCards(tags?: string[]) {
    this.cardsService.getAllCards(tags).subscribe(cards => {
      this.cards = cards;
    });
  }

  searchTags(tag: string) {
    this.cards = this.cards.filter(card => card.tag?.toLowerCase().includes(tag.toLowerCase()));
  }

}
