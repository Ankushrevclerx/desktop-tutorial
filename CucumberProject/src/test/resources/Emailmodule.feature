Feature: Title of your feature
  I want to use this template for my feature file

  Scenario Outline: Create Email
Given User Navigate to  <url>
When User enter valid user <username> and password <password> and Click into login button.

   Examples:
 |url                                           |username         |password    |
 |https://members.cloudvoicealliance.com        |Raja           |Raja@999  |
 |https://members.cloudvoicealliance.com        |Poo           |hjhdk@999  |
