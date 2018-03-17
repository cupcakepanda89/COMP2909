import { AppPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('myapp App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

    it('Get more practice working with elements in page', () => {
        page.navigateTo();
        // Ensure element with id='fname' has text equalling Jane.
        expect(element(by.id('fname')).getText()).toEqual('Jane');
        expect(element(by.id('lname')).getText()).toEqual('Truong');
        let headerElement = element(by.tagName("h2"));
        expect(headerElement.getText()).toEqual("Morning Show");

        // Get input element and enter the text 'Boston'.
        var cityInput = element(by.id('cityInput'));
        cityInput.sendKeys('Boston');
        // Get the button and click it.
        var msgButton = element(by.id('showMsgButton'));
        msgButton.click();

        // Test the message that is output after the button is clicked.
        var messageOutput = element(by.id('messageLabel'));
        expect(messageOutput.getText()).toEqual('It is always sunny in Boston');
        browser.sleep(5000);


    });

    it('Testing a list of items.', () => {
        // Get list of elements.
        let elements = element.all(by.tagName("li"));
        expect(elements.count()).toEqual(3);

        // Check text of first element.
        expect(elements.get(0).getText()).toEqual("Johnny");
    })
    browser.sleep(7000);
});
