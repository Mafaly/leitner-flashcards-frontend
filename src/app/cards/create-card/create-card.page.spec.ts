import {ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {ExploreContainerComponentModule} from '../explore-container/explore-container.module';

import {CreateCardPage} from './create-card.page';

describe('CreateCardPage', () => {
  let component: CreateCardPage;
  let fixture: ComponentFixture<CreateCardPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateCardPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
