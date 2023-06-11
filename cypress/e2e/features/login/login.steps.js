import {Then} from '@badeball/cypress-cucumber-preprocessor'

Then('user should login successful', () => {
    cy.contains('Sauce Labs Fleece Jacket').should('be.visible')
})