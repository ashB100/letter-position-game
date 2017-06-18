import { Injectable } from '@angular/core';
import { Answer, Question, QuestionAnswer } from '../models/models';

const questions: Question[] = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q',
                                'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];

@Injectable()
export class QuestionAnswerService {

  constructor() {
  }

  // generate a question
  public generateQuestion(): Question {
    return 'A';
  }

  public getCorrectAnswer( question: Question ): Answer {
    return '';
  }

  // validate answer
  public validateAnswer( question: Question, answer: Answer ): QuestionAnswer {
    return {
      question     : question,
      playerAnswer : answer,
      correctAnswer: this.getCorrectAnswer(question),
    };
  }
}
