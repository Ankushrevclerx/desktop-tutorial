$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Company.feature");
formatter.feature({
  "line": 1,
  "name": "Companycreation",
  "description": "",
  "id": "companycreation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8559578700,
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
  "duration": 7716539800,
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
  "duration": 2259472100,
  "status": "passed"
});
formatter.match({
  "location": "Login.dashbord_should_be_apperaed()"
});
formatter.result({
  "duration": 30378106000,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for frame to be available: 0 (tried for 30 second(s) with 500 milliseconds interval)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-FSL8CGI\u0027, ip: \u0027192.168.1.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.44.609538 (b655c5a60b0b54..., userDataDir: C:\\Users\\PARVAT~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:55190}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 81.0.4044.129, webStorageEnabled: true}\nSession ID: 7d48375f5c9c429ca292281c5a48912d\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat com.Utility.Helper.waituntilswitchtoFrame(Helper.java:22)\r\n\tat com.Pages.Dashboardpage.verifylogin(Dashboardpage.java:32)\r\n\tat stepprocess.Login.dashbord_should_be_apperaed(Login.java:103)\r\n\tat ✽.Then Dashbord should be apperaed(Company.feature:5)\r\n",
  "status": "failed"
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
  "status": "skipped"
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
  "duration": 1357101800,
  "status": "passed"
});
formatter.uri("Company.feature");
formatter.feature({
  "line": 1,
  "name": "Companycreation",
  "description": "",
  "id": "companycreation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6587872900,
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
  "duration": 3506198900,
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
  "duration": 2157381200,
  "status": "passed"
});
formatter.match({
  "location": "Login.dashbord_should_be_apperaed()"
});
formatter.result({
  "duration": 13134459700,
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
  "duration": 647700,
  "status": "passed"
});
formatter.match({
  "location": "Company.click_on_create_button_to_create_company()"
});
formatter.result({
  "duration": 306100,
  "status": "passed"
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
  "duration": 336200,
  "status": "passed"
});
formatter.match({
  "location": "Company.click_on_save_button_present_at_top_of_left_corner()"
});
formatter.result({
  "duration": 293600,
  "status": "passed"
});
formatter.match({
  "location": "Company.new_Company_should_be_created()"
});
formatter.result({
  "duration": 95500,
  "status": "passed"
});
formatter.after({
  "duration": 1003873300,
  "status": "passed"
});
});