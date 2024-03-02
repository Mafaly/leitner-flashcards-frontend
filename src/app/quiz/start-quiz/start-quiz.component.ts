import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-start-quiz',
  templateUrl: 'start-quiz.component.html',
  styleUrls: ['./start-quiz.component.scss'],
})
export class StartQuizComponent {

  constructor(private router: Router) {}

  startQuiz() {
    this.router.navigateByUrl('/quiz/interogation');
  }


}
