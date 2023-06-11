class LoginPage {

    //Page Elements
    get txtUsername() { return cy.get('#user-name')}
    get txtPaasword() { return cy.get('#password')}
    get btnLogin() { return cy.get('#login-button')}

    openUrl(){
        cy.visit('/')
    }

    login(username, password){
        this.txtUsername.type(username)
        this.txtPaasword.type(password)
        cy.screenshot()
        this.btnLogin.click()
    }

}
export default new LoginPage()