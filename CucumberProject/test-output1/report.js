$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/test/resources/Emailmodule.feature");
formatter.feature({
  "line": 1,
  "name": "Title of your feature",
  "description": "I want to use this template for my feature file",
  "id": "title-of-your-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Create Email",
  "description": "",
  "id": "title-of-your-feature;create-email",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User Navigate to  \u003curl\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enter valid user \u003cusername\u003e and password \u003cpassword\u003e and Click into login button.",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Dashboard page should be visible",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user navigate to Email module for instal \u003curl\u003e and click into compose button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "click on next button without selecting anything.",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Enter \"Test\" in subject field.",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click on next NextArrow",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Enter \"pkumar@vectre.net\" on To field",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "click on send button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Email should created with new data.",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "title-of-your-feature;create-email;",
  "rows": [
    {
      "cells": [
        "url",
        "username",
        "password"
      ],
      "line": 17,
      "id": "title-of-your-feature;create-email;;1"
    },
    {
      "cells": [
        "https://members.cloudvoicealliance.com",
        "pkumar",
        "piyush@999"
      ],
      "line": 18,
      "id": "title-of-your-feature;create-email;;2"
    },
    {
      "cells": [
        "https://members.cloudvoicealliance.com",
        "pkumar",
        "piyush@999"
      ],
      "line": 19,
      "id": "title-of-your-feature;create-email;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "Create Email",
  "description": "",
  "id": "title-of-your-feature;create-email;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User Navigate to  https://members.cloudvoicealliance.com",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enter valid user pkumar and password piyush@999 and Click into login button.",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Dashboard page should be visible",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user navigate to Email module for instal https://members.cloudvoicealliance.com and click into compose button",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "click on next button without selecting anything.",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Enter \"Test\" in subject field.",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click on next NextArrow",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Enter \"pkumar@vectre.net\" on To field",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "click on send button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Email should created with new data.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://members.cloudvoicealliance.com",
      "offset": 18
    }
  ],
  "location": "EmailModule.user_Navigate_to_https_members_cloudvoicealliance_com(String)"
});
