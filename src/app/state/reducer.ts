import * as gameActions from './actions';
import { Question, QuestionAnswer } from '../models/models';

/**
 * Overall state of @ngrx/store
 */
export interface StoreState {
  isGameOn: boolean;
  gameStartedOn: Date|null;
  lastQuestion: Question|null;
  gameHistory: QuestionAnswer[];
}

/**
 * Initial/default state of the store
 */
export const initialState: StoreState = {
  isGameOn: false,
  gameStartedOn: null,
  lastQuestion: null,
  gameHistory: [],
};

/**
 * Game reducer
 */
export function gameReducer(state: StoreState, action: gameActions.Actions): StoreState {
  switch (action.type) {
    case gameActions.ActionTypes.GAME_START:
      // Make sure all relevant fields are re-set on game start.
      return Object.assign({}, state, {
        isGameOn: true,
        gameStartedOn: new Date(),
        lastQuestion: null,
        gameHistory: [],
      });

    case gameActions.ActionTypes.GAME_OVER:
      if (!state.isGameOn) {
        return state;
      }

      return Object.assign({}, state, {
        isGameOn: false,
        lastQuestion: null,
      });

    case gameActions.ActionTypes.NEW_QUESTION:
      if (!state.isGameOn) {
        return state;
      }

      return Object.assign({}, state, {
        lastQuestion: (action as gameActions.NewQuestionAction).payload,
      });

    case gameActions.ActionTypes.QUESTION_ANSWER:
      if (!state.isGameOn) {
        return state;
      }

      return Object.assign({}, state, {
        gameHistory: [...state.gameHistory, (action as gameActions.QuestionAnswerAction).payload]
      });

    default:
      return state;
  }
}
