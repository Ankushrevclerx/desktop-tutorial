Feature: Companycreation
  Scenario: Verify Company creation functionality into AMP.
     When user open url "https://unitedpartners.ca"
    And user enter user name "pkumar" and password as "piyush@999"
    Then Dashbord should be apperaed
    And Navigate to Company creation page with url "https://unitedpartners.ca/#setup/companies"
    When click on create button to create company
    And Type company name as "TestinginCucumber"
    And click on save button present at top of left corner.
    Then New Company should be created .

