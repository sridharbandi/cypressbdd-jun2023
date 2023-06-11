import { Given, When } from '@badeball/cypress-cucumber-preprocessor'
import loginPage from '../../pom/pages/login.page'

Given('user is on sauce demo page', () => {
    loginPage.openUrl()
})

When('user logged in with {string} and {string}', (username, password) => {
    loginPage.login(username, password)
})