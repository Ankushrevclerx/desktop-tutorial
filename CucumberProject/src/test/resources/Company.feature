pFeature: Companycreation
  Scenario: Verify Company creation functionality into AMP.
     When user open url "Google.com"
    And user enter user name "dumy" and password as "dumy"
    Then Dashbord should be apperaed
    And Navigate to Company creation page with url "google.com"
    When click on create button to create company
    And Type company name as "TestinginCucumber"
    And click on save button present at top of left corner.
    Then New Company should be created .

