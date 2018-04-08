import { MyappPage } from './app.po';
import {by, element} from 'protractor';

describe('myapp App', function() {
  let page: MyappPage;

  beforeEach(() => {
    page = new MyappPage();
  });

  it('Get more practice working with elements in page', () => {
    page.navigateTo();
    // Ensure element with id='fname' has text equalling Jane.
    expect(element(by.id('fname')).getText()).toEqual('Jane');
    expect(element(by.id('lname')).getText()).toEqual('Howard');
    // Get input element and enter the text 'Boston'.
    var cityInput = element(by.id('cityInput'));
    cityInput.sendKeys('Boston');

    // Get the button and click it.
    var msgButton = element(by.id('showMsgButton'));
    msgButton.click();

    // Test the message that is output after the button is clicked.
    var messageOutput = element(by.id('messageLabel'));
    expect(messageOutput.getText()).toEqual('It is always sunny in Boston');
  });

});
