import { Selector } from 'testcafe';

class HomePage {
    constructor() {
        this.loginButton = Selector('.button-login');
        this.header = Selector('#welcome-page').find('h1');
    }
}

export default new HomePage()