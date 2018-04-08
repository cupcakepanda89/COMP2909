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
  it('Testing one element by tag name.', () => {
    page.navigateTo();
    let headerElement = element(by.tagName("h3"));
    expect(headerElement.getText()).toEqual("Morning Show");
  });

  it('Testing a list of items.', () => {
    // Get list of elements.
    let elements = element.all(by.tagName("li"));
    expect(elements.count()).toEqual(3);

    // Check text of first element.
    expect(elements.get(0).getText()).toEqual("Johnny");
  });

// Do more testing once the count has been determined.
  function ProcessPromiseResults(elements, originalCount) {
    expect(elements.count()).toEqual(originalCount);
    console.log("The count is: " + originalCount);
    expect(elements.get(0).getText()).toEqual("Johnny");
    expect(elements.get(originalCount - 1).getText()).toEqual("Nira")
  }

  it('Dynamically count items.', function () {
    let elements = element.all(by.tagName("li"));

    // Set up a promise to retrieve the actual count value.
    // Wait for the result and then process it.
    elements.count().then(function (originalCount) {
      ProcessPromiseResults(elements, originalCount)
    });
  });

});
