import { Action } from '@ngrx/store';

import { type } from '../core/utils';
import { Question, QuestionAnswer } from '../models/models';

export const ActionTypes = {
  GAME_START:       type('Start new game'),
  GAME_OVER:        type('Game over'),
  NEW_QUESTION:     type('New Question'),
  QUESTION_ANSWER:  type('Question Answer'),
};

/**
 * Game start
 */
export class GameStartAction implements Action {
  public type: string = ActionTypes.GAME_START;
}

/**
 * Game over
 */
export class GameOverAction implements Action {
  public type: string = ActionTypes.GAME_OVER;
}

/**
 * New question has been generated
 */
export class NewQuestionAction implements Action {
  public type: string = ActionTypes.NEW_QUESTION;

  /**
   * Actual question asked the player
   */
  constructor(public payload: Question) {}
}

/**
 * Player provided the answer
 */
export class QuestionAnswerAction implements Action {
  public type: string = ActionTypes.QUESTION_ANSWER;

  constructor(public payload: QuestionAnswer) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = GameStartAction
  | GameOverAction
  | NewQuestionAction
  | QuestionAnswerAction
;
