import { Ex2RestfulServicesPage } from './app.po';

describe('ex2-restful-services App', () => {
  let page: Ex2RestfulServicesPage;

  beforeEach(() => {
    page = new Ex2RestfulServicesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
