

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AddRemoveElementsPage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnAddElement() {
        return $('#content button');
    }

    get btnDelete() {
        return $('#content button.added-manually');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async addThenDeleteButton(){
        await this.btnAddElement.click()
        await this.btnDelete.waitForDisplayed();
        await this.btnDelete.click();
        await this.btnDelete.waitForDisplayed({reverse: true});
        await this.btnAddElement.isDisplayed();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('add_remove_elements/');
    }
}

module.exports = new AddRemoveElementsPage();