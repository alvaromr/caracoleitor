import { CaracoleitorPage } from './app.po';

describe('caracoleitor App', () => {
  let page: CaracoleitorPage;

  beforeEach(() => {
    page = new CaracoleitorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
