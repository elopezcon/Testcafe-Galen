import { Selector } from 'testcafe'

class MyNotesPage {
    constructor() {
        this.myNotes = Selector('#my-notes-page').find('h2');
    }
}

export default new MyNotesPage()