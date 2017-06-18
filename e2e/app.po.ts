import { browser, by, element } from 'protractor';
import * as webdriver from 'selenium-webdriver';


export class LetterPositionPage {
  public navigateTo(): webdriver.promise.Promise<void> {
    return browser.get('/');
  }

  public getHeadlineText(): webdriver.promise.Promise<string> {
    return element(by.css('app-root h1')).getText();
  }
}
