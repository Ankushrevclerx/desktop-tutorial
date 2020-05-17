package stepprocess;

import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.Base.Base;
import com.Pages.Dashboardpage;
import com.Pages.Loginpage;
import com.Pages.OpportunityPage;
import com.aventstack.extentreports.GherkinKeyword;
import com.aventstack.extentreports.gherkin.model.Feature;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.testng.TestNGCucumberRunner;
import junit.framework.Assert;

public class Login extends Base{

	//public OpportunityPage opportunitypage;
	OpportunityPage opportunitypage;
	Loginpage aa;
	Dashboardpage dashbord;
	//public Dashboardpage dashbord;
//	ExtentReportUtil rep;
	public static String finalFeaturename;
	int counter = 0;

	WebDriver driver;
	
	
	List<String> scenarioName=new ArrayList<String>();

//	@Before
//	public void setup(Scenario sec) {
	/*System.out.println("inside login");
		if(scenarioName.contains(sec.getName()))
		{
			mailflag=true;
		}
		else
		{
			scenarioName.add(sec.getName());
		}
		
		if (finalFeaturename == null) {
			System.out.println(counter + "00");

			finalFeaturename = sec.getId().split(";")[0];
			Base.feature = Base.extent.createTest(Feature.class, finalFeaturename);
			counter = counter + 1;
		}
		Featurename = sec.getId().split(";")[0];

		if (!finalFeaturename.equals(Featurename)) {
			finalFeaturename = Featurename;
			Base.feature = Base.extent.createTest(Feature.class, finalFeaturename);

		}*/
		//System.setProperty("webdriver.chrome.driver",
			//	"G:\\RamProject\\criticaltest\\MindMatrix_CriticalTestCases\\MindMatrix_CriticalTestCases\\Drivers\\chromedriver.exe");
		//driver = new ChromeDriver();

		//test = feature.createNode(sec.getName());

	//}

//	@After
//	public void cleanUp(Scenario sec) {
//		System.out.println(sec.getName() + "ended---");
//		driver.quit();
//
//	}
//	

	@When("^user open url \"(.*?)\"$")
	public void user_open_url(String url) throws Throwable {
	//	test.createNode(new GherkinKeyword("When"), "user open url " + url);
		aa = new Loginpage(driver);
		driver.get(url);

		// rep.extent.createTest("opportunity mode");
	}

	@And("^user enter user name \"(.*?)\" and password as \"(.*?)\"$")
	public void user_enter_user_name_and_password_as(String username, String password) throws Throwable {
		//test.createNode(new GherkinKeyword("And"), "user enter user name" + username + " and password " + password);
		aa.username(username);
		aa.password(password);
		dashbord = aa.loginButton();

	}

	@Then("^Dashbord should be apperaed$")
	public void dashbord_should_be_apperaed() throws Throwable {
		//test.createNode(new GherkinKeyword("Then"), "Dashbord should be apperaed");
		Assert.assertEquals(true, dashbord.verifylogin());

	}

	@Given("^User is at Opportunity Custom Field with url \"(.*?)\"$")
	public void user_is_at_Opportunity_Custom_Field_with_url(String url) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		//test.createNode(new GherkinKeyword("Given"), "User is at Opportunity Custom Field with url  " + url);
		driver.get(url);
	}

	@When("^click on create button$")
	public void click_on_create_button() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
	//	test.createNode(new GherkinKeyword("When"), "click on create button");
		opportunitypage = new OpportunityPage(driver);
		opportunitypage.createbutton();
	}

	@Then("^create opportunity window page should be open$")
	public void create_opportunity_window_page_should_be_open() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		//test.createNode(new GherkinKeyword("Then"), "create opportunity window page should be open");
		Assert.assertEquals(true, opportunitypage.oportunitywindow());

	}

	@And("^Type opportunity name as \"(.*?)\"$")
	public void type_opportunity_name_as(String arg1) throws Throwable {

		opportunitypage.FillingData(arg1);
	}

	@When("^click on next button$")
	public void click_on_next_button() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		//test.createNode(new GherkinKeyword("When"), "click on next button");
		opportunitypage.nextbuttonArrow();
	}

	@Then("^In Fields step wizard Add another Form Field should be visible$")
	public void in_Fields_step_wizard_Add_another_Form_Field_should_be_visible() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		//test.createNode(new GherkinKeyword("Then"), "In Fields step wizard Add another Form Field should be visible");
		Assert.assertEquals(true, opportunitypage.visibiltyofAddanotherForm());
	}

	@Then("^In Layout step wizard one tab with name \"(.*?)\" should be present$")
	public void in_Layout_step_wizard_one_tab_with_name_should_be_present(String arg1) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		//test.createNode(new GherkinKeyword("Then"),
				//"In Layout step wizard one tab with name" + arg1 + "should be present");
		Assert.assertEquals(true, opportunitypage.visibilityOfAddNewTab());
	}

	@Then("Click on step process checkbox")
	public void click_on_step_process_checkbox() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		//test.createNode(new GherkinKeyword("Then"), "Click on step process checkbox");
		opportunitypage.clickOnStepProcessCheckBox();
	}

	@When("^click on finish button present at Top right corner$")
	public void click_on_finish_button_present_at_Top_right_corner() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
	//	test.createNode(new GherkinKeyword("Then"), "click on finish button present at Top right corner");
		Thread.sleep(3000);
		opportunitypage.saveButtonClick();
		opportunitypage.clickonconformPopup();
	}

	@Then("^Opportunity type with name \"(.*?)\" should be created and presnt on summary page$")
	public void opportunity_type_with_name_should_be_created_and_presnt_on_summary_page(String arg1) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		//test.createNode(new GherkinKeyword("Then"),
				//"Opportunity type with name  " + arg1 + "should be created and presnt on summary page");
		Assert.assertEquals(true, opportunitypage.searchingCreatedOpportunity(arg1));

	}

}