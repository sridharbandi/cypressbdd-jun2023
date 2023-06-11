Feature: Sauce demo e2e journey

    @e2e
    Scenario: End to end sauce journey
        Given user is on sauce demo page
        When user logged in with "standard_user" and "secret_sauce"
        And user add  fleece jacket to the cart
        And user checkout the product
        And user submits personal information
        And user confirmed the product
        Then user sees order confirmation