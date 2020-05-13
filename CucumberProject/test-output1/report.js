$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Company.feature");
formatter.feature({
  "line": 1,
  "name": "Companycreation",
  "description": "",
  "id": "companycreation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7792476800,
  "status": "passed"
});
formatter.scenario({
  "line": 2,
  "name": "Verify Company creation functionality into AMP.",
  "description": "",
  "id": "companycreation;verify-company-creation-functionality-into-amp.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "user open url \"https://unitedpartners.ca\"",
  "keyword": "When "
});
formatter.step({
  "line": 4,
  "name": "user enter user name \"pkumar\" and password as \"piyush@999\"",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "Dashbord should be apperaed",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Navigate to Company creation page with url \"https://unitedpartners.ca/#setup/companies\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click on create button to create company",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Type company name as \"TestinginCucumber\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click on save button present at top of left corner.",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "New Company should be created .",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://unitedpartners.ca",
      "offset": 15
    }
  ],
  "location": "Login.user_open_url(String)"
});
formatter.result({
  "duration": 7119170900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pkumar",
      "offset": 22
    },
    {
      "val": "piyush@999",
      "offset": 47
    }
  ],
  "location": "Login.user_enter_user_name_and_password_as(String,String)"
});
formatter.result({
  "duration": 401066900,
  "status": "passed"
});
formatter.match({
  "location": "Login.dashbord_should_be_apperaed()"
});
formatter.result({
  "duration": 10339915100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://unitedpartners.ca/#setup/companies",
      "offset": 44
    }
  ],
  "location": "Company.navigate_to_Company_creation_page_with_url(String)"
});
formatter.result({
  "duration": 290734000,
  "error_message": "java.lang.NullPointerException\r\n\tat stepprocess.Company.navigate_to_Company_creation_page_with_url(Company.java:24)\r\n\tat ✽.And Navigate to Company creation page with url \"https://unitedpartners.ca/#setup/companies\"(Company.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Company.click_on_create_button_to_create_company()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "TestinginCucumber",
      "offset": 22
    }
  ],
  "location": "Company.type_company_name_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Company.click_on_save_button_present_at_top_of_left_corner()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Company.new_Company_should_be_created()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1198347700,
  "status": "passed"
});
formatter.uri("LoginAMP.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5472267900,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 3,
      "value": "#This is how background can be used to eliminate duplicate steps"
    }
  ],
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user open url \"https://unitedpartners.ca\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enter user name \"pkumar\" and password as \"piyush@999\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Dashbord should be apperaed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://unitedpartners.ca",
      "offset": 15
    }
  ],
  "location": "Login.user_open_url(String)"
});
formatter.result({
  "duration": 5901572700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pkumar",
      "offset": 22
    },
    {
      "val": "piyush@999",
      "offset": 47
    }
  ],
  "location": "Login.user_enter_user_name_and_password_as(String,String)"
});
formatter.result({
  "duration": 1777161300,
  "status": "passed"
});
formatter.match({
  "location": "Login.dashbord_should_be_apperaed()"
});
formatter.result({
  "duration": 8244111100,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Creating opportunity Type and verify it is created sucessfully.",
  "description": "",
  "id": "login;creating-opportunity-type-and-verify-it-is-created-sucessfully.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User is at Opportunity Custom Field with url \"https://unitedpartners.ca/#setup/opportunity\"",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "click on create button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "create opportunity window page should be open",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Type opportunity name as \"withoutcustvcc\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "click on next button",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "In Fields step wizard Add another Form Field should be visible",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "click on next button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "In Layout step wizard one tab with name \"Add New Tab\" should be present",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "click on finish button present at Top right corner",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Opportunity type with name \"withoutcustvcc\" should be created and presnt on summary page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://unitedpartners.ca/#setup/opportunity",
      "offset": 46
    }
  ],
  "location": "Login.user_is_at_Opportunity_Custom_Field_with_url(String)"
});
formatter.result({
  "duration": 72073100,
  "status": "passed"
});
formatter.match({
  "location": "Login.click_on_create_button()"
});
formatter.result({
  "duration": 704366700,
  "status": "passed"
});
formatter.match({
  "location": "Login.create_opportunity_window_page_should_be_open()"
});
formatter.result({
  "duration": 2561622300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "withoutcustvcc",
      "offset": 26
    }
  ],
  "location": "Login.type_opportunity_name_as(String)"
});
formatter.result({
  "duration": 1871664900,
  "status": "passed"
});
formatter.match({
  "location": "Login.click_on_next_button()"
});
formatter.result({
  "duration": 120708900,
  "status": "passed"
});
formatter.match({
  "location": "Login.in_Fields_step_wizard_Add_another_Form_Field_should_be_visible()"
});
formatter.result({
  "duration": 3846071000,
  "status": "passed"
});
formatter.match({
  "location": "Login.click_on_next_button()"
});
formatter.result({
  "duration": 60613700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add New Tab",
      "offset": 41
    }
  ],
  "location": "Login.in_Layout_step_wizard_one_tab_with_name_should_be_present(String)"
});
formatter.result({
  "duration": 31897100,
  "status": "passed"
});
formatter.match({
  "location": "Login.click_on_finish_button_present_at_Top_right_corner()"
});
formatter.result({
  "duration": 3198115400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "withoutcustvcc",
      "offset": 28
    }
  ],
  "location": "Login.opportunity_type_with_name_should_be_created_and_presnt_on_summary_page(String)"
});
formatter.result({
  "duration": 36386000,
  "status": "passed"
});
formatter.after({
  "duration": 995066800,
  "status": "passed"
});
formatter.before({
  "duration": 6192645400,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 3,
      "value": "#This is how background can be used to eliminate duplicate steps"
    }
  ],
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user open url \"https://unitedpartners.ca\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enter user name \"pkumar\" and password as \"piyush@999\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Dashbord should be apperaed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://unitedpartners.ca",
      "offset": 15
    }
  ],
  "location": "Login.user_open_url(String)"
});
formatter.result({
  "duration": 5853661600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pkumar",
      "offset": 22
    },
    {
      "val": "piyush@999",
      "offset": 47
    }
  ],
  "location": "Login.user_enter_user_name_and_password_as(String,String)"
});
formatter.result({
  "duration": 814507900,
  "status": "passed"
});
formatter.match({
  "location": "Login.dashbord_should_be_apperaed()"
});
formatter.result({
  "duration": 8589709300,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Creating opportunity after click on step process checkbox",
  "description": "",
  "id": "login;creating-opportunity-after-click-on-step-process-checkbox",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "User is at Opportunity Custom Field with url \"https://unitedpartners.ca/#setup/opportunity\"",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "click on create button",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "create opportunity window page should be open",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Type opportunity name as \"opportunitywithstep\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "click on next button",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "In Fields step wizard Add another Form Field should be visible",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "click on next button",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "In Layout step wizard one tab with name \"Add New Tab\" should be present",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Click on step process checkbox",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "click on finish button present at Top right corner",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "Opportunity type with name \"opportunitywithstep\" should be created and presnt on summary page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://unitedpartners.ca/#setup/opportunity",
      "offset": 46
    }
  ],
  "location": "Login.user_is_at_Opportunity_Custom_Field_with_url(String)"
});
formatter.result({
  "duration": 85234500,
  "status": "passed"
});
formatter.match({
  "location": "Login.click_on_create_button()"
});
formatter.result({
  "duration": 1096324900,
  "status": "passed"
});
formatter.match({
  "location": "Login.create_opportunity_window_page_should_be_open()"
});
formatter.result({
  "duration": 2637099900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "opportunitywithstep",
      "offset": 26
    }
  ],
  "location": "Login.type_opportunity_name_as(String)"
});
formatter.result({
  "duration": 919197400,
  "status": "passed"
});
formatter.match({
  "location": "Login.click_on_next_button()"
});
formatter.result({
  "duration": 131903900,
  "status": "passed"
});
formatter.match({
  "location": "Login.in_Fields_step_wizard_Add_another_Form_Field_should_be_visible()"
});
formatter.result({
  "duration": 2289264400,
  "status": "passed"
});
formatter.match({
  "location": "Login.click_on_next_button()"
});
formatter.result({
  "duration": 892779300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add New Tab",
      "offset": 41
    }
  ],
  "location": "Login.in_Layout_step_wizard_one_tab_with_name_should_be_present(String)"
});
formatter.result({
  "duration": 58981900,
  "status": "passed"
});
formatter.match({
  "location": "Login.click_on_step_process_checkbox()"
});
formatter.result({
  "duration": 1702419200,
  "status": "passed"
});
formatter.match({
  "location": "Login.click_on_finish_button_present_at_Top_right_corner()"
});
formatter.result({
  "duration": 13246851400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "opportunitywithstep",
      "offset": 28
    }
  ],
  "location": "Login.opportunity_type_with_name_should_be_created_and_presnt_on_summary_page(String)"
});
formatter.result({
  "duration": 34902900,
  "status": "passed"
});
formatter.after({
  "duration": 795943800,
  "status": "passed"
});
});