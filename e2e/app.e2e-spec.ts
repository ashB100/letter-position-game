import { LetterPositionPage } from './app.po';

describe('letter-position App', () => {
  let page: LetterPositionPage;

  beforeEach(() => {
    page = new LetterPositionPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getHeadlineText()
      .then(msg => expect(msg).toEqual('Letter Position Game'))
      .then(done, done.fail);
  });
});
