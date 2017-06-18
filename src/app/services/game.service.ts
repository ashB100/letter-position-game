import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { QuestionAnswerService } from './question-answer.service';
import { StoreState } from '../state/reducer';

@Injectable()
export class GameService {


  constructor(private questionAnswerService: QuestionAnswerService, private store: Store<StoreState>) {}

  // start game

  // stop game

  // get next question

  // submit answer

  // get game summary
}
