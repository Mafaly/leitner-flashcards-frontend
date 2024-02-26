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
  filteredCards: Card[] = [];
  categories: (number | string)[] = [1, 2, 3, 4, 5, 6, 7, 'Done'];
  selectedCategories: (number | string)[] = [];
  lastSearchTag: string = '';

  constructor(private cardsService: CardsService) {
  }

  ngOnInit() {
    this.fetchCards();
  }

  fetchCards(tags?: string[]) {
    this.cardsService.getAllCards(tags).subscribe(cards => {
      this.cards = cards;
      this.filteredCards = [...this.cards];
    });
  }

  searchTags(tag: string) {
    this.lastSearchTag = tag;
    this.filterCards();
  }

  getCategory(category: string): number | string {
    const mapping: { [key: string]: number | string } = {
      'FIRST': 1,
      'SECOND': 2,
      'THIRD': 3,
      'FOURTH': 4,
      'FIFTH': 5,
      'SIXTH': 6,
      'SEVEN': 7,
      'DONE': 'Done',
    };
    return mapping[category] || 'Done';
  }

  filterCards() {
    let tempFilteredCards = [...this.cards];

    if (this.lastSearchTag) {
      tempFilteredCards = tempFilteredCards.filter(card => card.tag?.toLowerCase().includes(this.lastSearchTag.toLowerCase()));
    }

    if (this.selectedCategories.length > 0) {
      tempFilteredCards = tempFilteredCards.filter(card =>
        this.selectedCategories.includes(this.getCategory(card.category))
      );
    }

    this.filteredCards = tempFilteredCards;
  }
}
