$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("G:/RamProject/CucumberProject/src/test/resources/LoginAMP.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 10216798700,
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
  "duration": 5612490000,
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
  "duration": 1819183600,
  "status": "passed"
});
formatter.match({
  "location": "Login.dashbord_should_be_apperaed()"
});
formatter.result({
  "duration": 21408325900,
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
    },
    {
      "line": 9,
      "name": "@Smoke"
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
  "name": "Type opportunity name as \"withoutcustommmmvcc\"",
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
  "name": "Opportunity type with name \"withoutcustommmmvcc\" should be created and presnt on summary page",
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
  "duration": 70318200,
  "status": "passed"
});
formatter.match({
  "location": "Login.click_on_create_button()"
});
formatter.result({
  "duration": 2986940200,
  "status": "passed"
});
formatter.match({
  "location": "Login.create_opportunity_window_page_should_be_open()"
});
formatter.result({
  "duration": 2475538100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "withoutcustommmmvcc",
      "offset": 26
    }
  ],
  "location": "Login.type_opportunity_name_as(String)"
});
formatter.result({
  "duration": 1219773400,
  "status": "passed"
});
formatter.match({
  "location": "Login.click_on_next_button()"
});
formatter.result({
  "duration": 21552400,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d80.0.3987.163)\n  (Driver info: chromedriver\u003d2.44.609538 (b655c5a60b0b544917107a59d4153d4bf78e1b90),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-FSL8CGI\u0027, ip: \u0027192.168.1.6\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.44.609538 (b655c5a60b0b54..., userDataDir: C:\\Users\\PARVAT~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:60358}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 80.0.3987.163, webStorageEnabled: true}\nSession ID: d0cc8b5567b75b1f1a7515b4b7524c33\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027wizardNext\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat com.Pages.OpportunityPage.nextbuttonArrow(OpportunityPage.java:80)\r\n\tat stepprocess.Login.click_on_next_button(Login.java:88)\r\n\tat ✽.When click on next button(G:/RamProject/CucumberProject/src/test/resources/LoginAMP.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Login.in_Fields_step_wizard_Add_another_Form_Field_should_be_visible()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.click_on_next_button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Login.click_on_finish_button_present_at_Top_right_corner()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "withoutcustommmmvcc",
      "offset": 28
    }
  ],
  "location": "Login.opportunity_type_with_name_should_be_created_and_presnt_on_summary_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 880126100,
  "status": "passed"
});
formatter.before({
  "duration": 5937006200,
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
  "duration": 3652407500,
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
  "duration": 444142500,
  "status": "passed"
});
formatter.match({
  "location": "Login.dashbord_should_be_apperaed()"
});
formatter.result({
  "duration": 22311570500,
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
    },
    {
      "line": 9,
      "name": "@Smoke"
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
  "name": "Type opportunity name as \"withoutcustommmmvcc\"",
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
  "name": "Opportunity type with name \"withoutcustommmmvcc\" should be created and presnt on summary page",
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
  "duration": 599337500,
  "status": "passed"
});
formatter.match({
  "location": "Login.click_on_create_button()"
});
formatter.result({
  "duration": 1237869800,
  "status": "passed"
});
formatter.match({
  "location": "Login.create_opportunity_window_page_should_be_open()"
});
formatter.result({
  "duration": 1183178000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "withoutcustommmmvcc",
      "offset": 26
    }
  ],
  "location": "Login.type_opportunity_name_as(String)"
});
formatter.result({
  "duration": 491511700,
  "status": "passed"
});
formatter.match({
  "location": "Login.click_on_next_button()"
});
formatter.result({
  "duration": 87650200,
  "status": "passed"
});
formatter.match({
  "location": "Login.in_Fields_step_wizard_Add_another_Form_Field_should_be_visible()"
});
formatter.result({
  "duration": 30076789600,
  "error_message": "junit.framework.AssertionFailedError: expected:\u003ctrue\u003e but was:\u003cfalse\u003e\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.failNotEquals(Assert.java:329)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:78)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:174)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:181)\r\n\tat stepprocess.Login.in_Fields_step_wizard_Add_another_Form_Field_should_be_visible(Login.java:94)\r\n\tat ✽.Then In Fields step wizard Add another Form Field should be visible(G:/RamProject/CucumberProject/src/test/resources/LoginAMP.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Login.click_on_next_button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Login.click_on_finish_button_present_at_Top_right_corner()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "withoutcustommmmvcc",
      "offset": 28
    }
  ],
  "location": "Login.opportunity_type_with_name_should_be_created_and_presnt_on_summary_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 886032700,
  "status": "passed"
});
formatter.before({
  "duration": 5352512500,
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
  "duration": 2322295400,
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
  "duration": 389773300,
  "status": "passed"
});
formatter.match({
  "location": "Login.dashbord_should_be_apperaed()"
});
formatter.result({
  "duration": 16029293700,
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
    },
    {
      "line": 9,
      "name": "@Smoke"
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
  "name": "Type opportunity name as \"withoutcustommmmvcc\"",
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
  "name": "Opportunity type with name \"withoutcustommmmvcc\" should be created and presnt on summary page",
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
  "duration": 83210400,
  "status": "passed"
});
formatter.match({
  "location": "Login.click_on_create_button()"
});
formatter.result({
  "duration": 3917510100,
  "status": "passed"
});
formatter.match({
  "location": "Login.create_opportunity_window_page_should_be_open()"
});
formatter.result({
  "duration": 6260560300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "withoutcustommmmvcc",
      "offset": 26
    }
  ],
  "location": "Login.type_opportunity_name_as(String)"
});
formatter.result({
  "duration": 463651100,
  "status": "passed"
});
formatter.match({
  "location": "Login.click_on_next_button()"
});
formatter.result({
  "duration": 135068600,
  "status": "passed"
});
formatter.match({
  "location": "Login.in_Fields_step_wizard_Add_another_Form_Field_should_be_visible()"
});
formatter.result({
  "duration": 30373938000,
  "error_message": "junit.framework.AssertionFailedError: expected:\u003ctrue\u003e but was:\u003cfalse\u003e\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.failNotEquals(Assert.java:329)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:78)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:174)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:181)\r\n\tat stepprocess.Login.in_Fields_step_wizard_Add_another_Form_Field_should_be_visible(Login.java:94)\r\n\tat ✽.Then In Fields step wizard Add another Form Field should be visible(G:/RamProject/CucumberProject/src/test/resources/LoginAMP.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Login.click_on_next_button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Login.click_on_finish_button_present_at_Top_right_corner()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "withoutcustommmmvcc",
      "offset": 28
    }
  ],
  "location": "Login.opportunity_type_with_name_should_be_created_and_presnt_on_summary_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 930326800,
  "status": "passed"
});
formatter.before({
  "duration": 5541494800,
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
  "duration": 2900745300,
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
  "duration": 376459200,
  "status": "passed"
});
formatter.match({
  "location": "Login.dashbord_should_be_apperaed()"
});
formatter.result({
  "duration": 18745100200,
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
    },
    {
      "line": 9,
      "name": "@Smoke"
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
  "name": "Type opportunity name as \"withoutcustommmmvcc\"",
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
  "name": "Opportunity type with name \"withoutcustommmmvcc\" should be created and presnt on summary page",
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
  "duration": 79619900,
  "status": "passed"
});
formatter.match({
  "location": "Login.click_on_create_button()"
});
formatter.result({
  "duration": 3342801700,
  "status": "passed"
});
formatter.match({
  "location": "Login.create_opportunity_window_page_should_be_open()"
});
formatter.result({
  "duration": 3328436100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "withoutcustommmmvcc",
      "offset": 26
    }
  ],
  "location": "Login.type_opportunity_name_as(String)"
});
formatter.result({
  "duration": 387518600,
  "status": "passed"
});
formatter.match({
  "location": "Login.click_on_next_button()"
});
formatter.result({
  "duration": 141165700,
  "status": "passed"
});
formatter.match({
  "location": "Login.in_Fields_step_wizard_Add_another_Form_Field_should_be_visible()"
});
formatter.result({
  "duration": 24413929400,
  "error_message": "junit.framework.AssertionFailedError: expected:\u003ctrue\u003e but was:\u003cfalse\u003e\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.failNotEquals(Assert.java:329)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:78)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:174)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:181)\r\n\tat stepprocess.Login.in_Fields_step_wizard_Add_another_Form_Field_should_be_visible(Login.java:94)\r\n\tat ✽.Then In Fields step wizard Add another Form Field should be visible(G:/RamProject/CucumberProject/src/test/resources/LoginAMP.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Login.click_on_next_button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Login.click_on_finish_button_present_at_Top_right_corner()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "withoutcustommmmvcc",
      "offset": 28
    }
  ],
  "location": "Login.opportunity_type_with_name_should_be_created_and_presnt_on_summary_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 587567500,
  "status": "passed"
});
formatter.before({
  "duration": 5498419400,
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
  "duration": 4049798700,
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
  "duration": 361727500,
  "status": "passed"
});
formatter.match({
  "location": "Login.dashbord_should_be_apperaed()"
});
formatter.result({
  "duration": 26527276800,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "second scenario for login",
  "description": "",
  "id": "login;second-scenario-for-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "User is at Opportunity Custom Field with url \"https://unitedpartners.ca/#setup/opportunity\"",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "click on create button",
  "keyword": "When "
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
  "duration": 72635800,
  "status": "passed"
});
formatter.match({
  "location": "Login.click_on_create_button()"
});
formatter.result({
  "duration": 5332343400,
  "status": "passed"
});
formatter.after({
  "duration": 833613900,
  "status": "passed"
});
});