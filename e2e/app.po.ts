import { browser, element, by } from 'protractor';

export class CaracoleitorPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('caracoleitor-root h1')).getText();
  }
}
