const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const AddRemoveElementsPage = require('../pageobjects/add_remove_elements.page');
const assert = require('assert');

describe('My Login application', () => {
    xit('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });
    
    xit('Delete element', async () => {
        await AddRemoveElementsPage.open();
        await AddRemoveElementsPage.addThenDeleteButton();
    });

    xit('Get title and assert text', async () => {
        await browser.url("https://the-internet.herokuapp.com/");
        await browser.pause(3000)
        const title = browser.getTitle();
        assert.strictEqual(title, 'The Internet');
    });

    it('Input value and check field with value', async () => {
        await browser.url("https://the-internet.herokuapp.com/inputs");
        let input_number = $("input[type='number']");
        await input_number.addValue('123');
        await browser.pause(2000);
        await input_number.addValue('456');

        get_some_value = await input_number.getValue();
        assert(get_some_value == '123456');
    });
});

// const assert = require('assert');

// describe('Check title on main page', () => {
//     it('Get title and assert text', () => {
//         browser.url("https://the-internet.herokuapp.com/");
//         const title = browser.getTitle();
//         assert.strictEqual(title, 'The Internet');
//     });
// });


