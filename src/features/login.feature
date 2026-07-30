Feature: Login

Scenario: Successful login

Given the user is on the login page
When the user enters valid credentials
And the user clicks the Login button
Then the Swag Labs should be displayed