import { LetterPositionPage } from './app.po';

describe('letter-position App', () => {
  let page: LetterPositionPage;

  beforeEach(() => {
    page = new LetterPositionPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
