const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const AddRemoveElementsPage = require('../pageobjects/add_remove_elements.page');

// describe('My Login application', () => {
//     it('should login with valid credentials', async () => {
//         await LoginPage.open();

//         await LoginPage.login('tomsmith', 'SuperSecretPassword!');
//         await expect(SecurePage.flashAlert).toBeExisting();
//         await expect(SecurePage.flashAlert).toHaveTextContaining(
//             'You logged into a secure area!');
//     });
// });

describe('Add element after delete', () => {
    it('Delete element', async () => {
        await AddRemoveElementsPage.open();
        await AddRemoveElementsPage.addThenDeleteButton();
    });
});


