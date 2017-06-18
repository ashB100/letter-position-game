/**
 * It represents a question in the game.
 */
export type Question = string;
export type Answer = string;

/**
 * Set of question and their answers provided by player throughout entire game
 */
export interface QuestionAnswer {
  /**
   * Generated question
   */
  question: Question;

  /**
   * Answer provided by player
   */
  playerAnswer: Answer;

  /**
   * Was the answer correct
   */
  correctAnswer: Answer;
}
