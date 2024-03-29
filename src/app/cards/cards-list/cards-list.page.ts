import {Component} from '@angular/core';
import {Card} from "../model/card";
import {CardsService} from "../../services/cards.service";
import {CategoryMap, getCategoryValue} from "../model/Category";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-tab1',
  templateUrl: 'cards-list.page.html',
  styleUrls: ['cards-list.page.scss']
})
export class CardsListPage {
  cards: Card[] = [];
  filteredCards: Card[] = [];
  categories = Object.values(CategoryMap)
  selectedCategories: (number | string)[] = [];
  tagsList: string[] = [];
  flippedCards: { [key: string]: boolean } = {};

  constructor(private cardsService: CardsService) {
  }

  ionViewWillEnter() {
    this.fetchCards();
  }

  refreshList() {
    this.fetchCards();
  }

  fetchCards() {
    this.cardsService.getAllCards(this.tagsList).subscribe(cards => {
      this.cards = cards;
      this.filteredCards = [...this.cards];
      this.filterCards()
    });
  }

  addTag(tag: string) {
    if (tag && !this.tagsList.includes(tag)) {
      this.tagsList.push(tag);
      this.refreshList()
    }
  }

  removeSearchTag(tag: string) {
    this.tagsList = this.tagsList.filter(t => t !== tag);
    this.refreshList()
  }

  filterCards() {
    let tempFilteredCards = [...this.cards];

    if (this.selectedCategories.length > 0) {
      tempFilteredCards = tempFilteredCards.filter(card =>
        this.selectedCategories.includes(getCategoryValue(card.category))
      );
    }
    this.filteredCards = tempFilteredCards;
  }

  flipCard(cardId: string): void {
    this.flippedCards[cardId] = !this.flippedCards[cardId];
  }

  flipBack(cardId: string): void {
    if (this.flippedCards[cardId]) {
      this.flippedCards[cardId] = false;
    }
  }

}
