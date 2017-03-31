import { FreshNewsPage } from './app.po';

describe('fresh-news App', () => {
  let page: FreshNewsPage;

  beforeEach(() => {
    page = new FreshNewsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
