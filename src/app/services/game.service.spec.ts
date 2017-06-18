import { TestBed } from '@angular/core/testing';

import { GameService } from './game.service';
import { QuestionAnswerService } from './question-answer.service';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from '../state/index';
import { initialState } from '../state/reducer';

describe('GameService', () => {
  let service: GameService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.provideStore(rootReducer, initialState)],
      providers: [
        GameService,
        QuestionAnswerService,
      ]
    });

    service = TestBed.get(GameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
