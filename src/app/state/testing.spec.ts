import { gameReducer, initialState, StoreState } from './reducer';
import * as gameActions from './actions';
import { QuestionAnswer } from '../models/models';

describe('State', () => {
  // put reusable mocks here
  const answer: QuestionAnswer = {
    question     : 'Question: B',
    playerAnswer : 'Answer: B',
    correctAnswer: 'Answer: B',
  };

  it('should produce state for game start', () => {
    let newState: StoreState;

    // Start the game
    newState = gameReducer(initialState, new gameActions.GameStartAction());
    expect(newState.isGameOn).toBe(true);
    expect(newState.gameStartedOn instanceof Date).toBe(true);
    expect(newState.gameHistory).toEqual([]);
  });

  it('should produce state for game over', () => {
    // Start the game first
    const stateGameStarted: StoreState = gameReducer(initialState, new gameActions.GameStartAction());

    // Now finish the game
    const newState: StoreState = gameReducer(stateGameStarted, new gameActions.GameOverAction());
    expect(newState.isGameOn).toBe(false);
    expect(newState.gameStartedOn instanceof Date).toBe(true);
    expect(newState.lastQuestion).toBe(null);
    expect(newState.gameHistory.length).toBeGreaterThanOrEqual(0);
  });

  it('should produce state for game over (for non-started game)', () => {
    // Make sure it doesn't crash if the game hasn't started yet
    const newState: StoreState = gameReducer(initialState, new gameActions.GameOverAction());
    expect(newState.isGameOn).toBe(false);
    expect(newState.gameStartedOn).toBe(null);
    expect(newState.lastQuestion).toBe(null);
    expect(newState.gameHistory.length).toBe(0);
  });

  it('it should generate new question state', () => {
    // Dispatch new question action without starting
    let newState: StoreState = gameReducer(initialState, new gameActions.NewQuestionAction('Question: A'));
    expect(newState).toBe(initialState);

    // Start the game
    const gameStartedState: StoreState = gameReducer(initialState, new gameActions.GameStartAction());

    // Generate question
    newState = gameReducer(gameStartedState, new gameActions.NewQuestionAction('Question: A'));
    expect(newState.isGameOn).toBe(true);
    expect(newState.lastQuestion).toBe('Question: A');
  });

  it('it should update new question and keep game history', () => {
    // Start the game
    const gameStartedState: StoreState = gameReducer(initialState, new gameActions.GameStartAction());

    // Generate question
    const firstQuestionState: StoreState = gameReducer(gameStartedState, new gameActions.NewQuestionAction('Question: B'));

    // Generate answer
    const answerState: StoreState = gameReducer(firstQuestionState, new gameActions.QuestionAnswerAction(answer));

    // Generate question
    const newState: StoreState = gameReducer(answerState, new gameActions.NewQuestionAction('Question: C'));

    // Check new state
    expect(newState.isGameOn).toBe(true);
    expect(newState.lastQuestion).toBe('Question: C');
    expect(newState.gameHistory.length).toEqual(1);
    expect(newState.gameHistory[newState.gameHistory.length - 1]).toBe(answer);
  });

  it('should not generate new question state if game is not on', () => {
    // Generate question
    const newState: StoreState = gameReducer(initialState, new gameActions.NewQuestionAction('Question: D'));

    expect(newState.isGameOn).toBe(false);
    expect(newState).toBe(initialState);
    expect(newState.lastQuestion).toBe(null);
  });

  it('should generate new state for answer', () => {
    // Generate answer
    let newState: StoreState = gameReducer(initialState, new gameActions.QuestionAnswerAction(answer));
    expect(newState).toBe(initialState);
    expect(newState.isGameOn).toBe(false);

    // Start game
    newState = gameReducer(newState, new gameActions.GameStartAction());
    expect(newState.isGameOn).toEqual(true);

    // Generate answer
    newState = gameReducer(newState, new gameActions.QuestionAnswerAction(answer));
    expect(newState.gameHistory.length).toEqual(1);
    expect(newState.gameHistory[newState.gameHistory.length - 1]).toBe(answer);
  });

  it('should return state if incorrect action is provided', () => {
    const newState = gameReducer(initialState, {type: 'SOME-RANDOM-ACTION'});
    expect(newState).toBe(initialState);
  });

});
