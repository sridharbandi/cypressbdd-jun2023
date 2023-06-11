class PersonalInfoPage {

    get txtFirstName() { return cy.get('#first-name') }
    get txtLastName() { return cy.get('#last-name') }
    get txtPostcode() { return cy.get('#postal-code') }
    get btnContinue() { return cy.get('#continue') }

    submitPersonalInfo(){
        this.txtFirstName.type('Sridhar')
        this.txtLastName.type('Bandi')
        this.txtPostcode.type('00000')
        this.btnContinue.click()
    }

}

export default new PersonalInfoPage()