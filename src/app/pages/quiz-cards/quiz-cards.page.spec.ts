import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuizCardsPage } from './quiz-cards.page';

describe('QuizCardsPage', () => {
  let component: QuizCardsPage;
  let fixture: ComponentFixture<QuizCardsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QuizCardsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
