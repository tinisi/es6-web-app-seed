import App from '../src/resources/js/app';

describe('App', () => {
  let app;
  beforeEach(() => {
    app = new App();
  });

  it('has an init method', () => {
    expect(app.init).toEqual(jasmine.any(Function));
  });
});
