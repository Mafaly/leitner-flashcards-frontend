import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';


import { CardsListPage } from './cards-list.page';

describe('CardsListPage', () => {
  let component: CardsListPage;
  let fixture: ComponentFixture<CardsListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardsListPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CardsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
