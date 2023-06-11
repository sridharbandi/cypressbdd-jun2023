Feature: Login Sauce Demo

    @login
    Scenario: Login
        Given user is on sauce demo page
        When user logged in with "standard_user" and "secret_sauce"
        Then user should login successful