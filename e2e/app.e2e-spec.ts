import { ConversationalPage } from './app.po';

describe('conversational App', function() {
  let page: ConversationalPage;

  beforeEach(() => {
    page = new ConversationalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
