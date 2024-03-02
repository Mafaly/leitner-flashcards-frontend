import {Component, Input} from '@angular/core';
import {Card} from "../model/card";
import {getCategoryValue} from "../model/Category";

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})
export class CardItemComponent {
  @Input() card!: Card;
  flipped = false;

  flipCard(): void {
    this.flipped = !this.flipped;
  }

  flipBack(): void {
    this.flipped = false;
  }

  protected readonly getCategoryValue = getCategoryValue;
}
