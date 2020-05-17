Feature: Title of your feature
  I want to use this template for my feature file

  Scenario Outline: Create Email
Given User Navigate to  <url>
When User enter valid user <username> and password <password> and Click into login button.
Then Dashboard page should be visible
When user navigate to Email module for instal <url> and click into compose button
And click on next button without selecting anything.  
And Enter "Test" in subject field.
And click on next NextArrow
And Enter "pkumar@vectre.net" on To field
And click on send button
Then Email should created with new data.

   Examples:
 |url                                           |username         |password    |
 |https://members.cloudvoicealliance.com        |pkumar           |piyush@999  |
 |https://members.cloudvoicealliance.com        |pkumar           |piyush@999  |
