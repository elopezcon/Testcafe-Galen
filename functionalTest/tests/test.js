import HomePage from '../objectPages/HomePage';
import LoginPage from '../objectPages/LoginPage';
import MyNotesPage from '../objectPages/MyNotesPage';
import DataProvider from '../data/Data';
import { MAIN_URL } from '../utils/constants'

fixture`Access to login homepage`
    .page(`${MAIN_URL}`);

test.only('Access to login homepage and click on login button', async (t) => {
    await t
        .expect(HomePage.header.innerText).eql('Welcome to our test page!')
        .click(HomePage.loginButton);
});

test.only('Start login process happy path', async (t) => {
    await t
        .click(HomePage.loginButton)
        .typeText(LoginPage.userTextField, 'testuser@example.com')
        .typeText(LoginPage.passwordTextField, 'test123')
        .click(LoginPage.loginbutton)
        .expect(MyNotesPage.myNotes.innerText)
        .eql('My Notes');

});

DataProvider.userData.map(async users => (
    test('Error loggin', async (t) => {
        await t
            .click(HomePage.loginButton);

        if (users.user) {
            await t
                .typeText(LoginPage.userTextField, users.user);
        }
        if (users.password) {
            await t
                .typeText(LoginPage.passwordTextField, users.password);
        }
        await t
            .click(LoginPage.loginbutton)
            .expect(LoginPage.errorMessage.innerText)
            .eql('The username or password are incorrect');
    })
));