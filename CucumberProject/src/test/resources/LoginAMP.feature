Feature: Login

  #This is how background can be used to eliminate duplicate steps
  Background: 
    When user open url "https://dvl-master.amp.vg/login"
    And user enter user name "dumy" and password as "dumy@999"
    Then Dashbord should be apperaed

  @RegressionTest 
  Scenario: Creating opportunity Type and verify it is created sucessfully.
    Given User is at Opportunity Custom Field with url "https://google.com"
    When click on create button
    Then create opportunity window page should be open
    And Type opportunity name as "withoutcustvcc"
    When click on next button
    Then In Fields step wizard Add another Form Field should be visible
    Then click on next button
    Then In Layout step wizard one tab with name "Add New Tab" should be present
    When click on finish button present at Top right corner
    Then Opportunity type with name "withoutcustvcc" should be created and presnt on summary page
    
    @RegressionTest 
    Scenario: Creating opportunity after click on step process checkbox
     Given User is at Opportunity Custom Field with url "google.com"
    When click on create button
     Then create opportunity window page should be open
    And Type opportunity name as "opportunitywithstep"
    When click on next button
    Then In Fields step wizard Add another Form Field should be visible
    Then click on next button
    Then In Layout step wizard one tab with name "Add New Tab" should be present
    Then  Click on step process checkbox
    When click on finish button present at Top right corner
    Then Opportunity type with name "opportunitywithstep" should be created and presnt on summary page
