import { Selector } from 'testcafe'

class LoginPage {
    constructor() {
        this.userTextField = Selector('input[name*=username]');
        this.passwordTextField = Selector('input[name*=password]');
        this.loginbutton = Selector('.button-login');
        this.cancelButton = Selector('.button-cancel');
        this.errorMessage = Selector('#login-error-message');
    }
}

export default new LoginPage()