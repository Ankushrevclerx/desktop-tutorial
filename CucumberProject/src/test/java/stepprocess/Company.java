package stepprocess;

import org.openqa.selenium.chrome.ChromeDriver;

import com.Base.Base;
import com.aventstack.extentreports.GherkinKeyword;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.*;

public class Company extends Base {
	
	
	
	
	
	
	@Then("^Navigate to Company creation page with url \"(.*?)\"$")
	public void navigate_to_Company_creation_page_with_url(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	//	test.createNode(new GherkinKeyword("When"), "user open url "+url);
		test.createNode(new GherkinKeyword("Then"), "Navigate to Company creation page with url " + arg1);
	   System.out.println("1111111111");
	}
	
	@When("^click on create button to create company$")
	public void click_on_create_button_to_create_company() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		test.createNode(new GherkinKeyword("When"), "click on create button to create company ");
	  
	}

	@When("^Type company name as \"(.*?)\"$")
	public void type_company_name_as(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("1111111111222222222222");
		test.createNode(new GherkinKeyword("When"), "Type company name as "+arg1);
	}

	@When("^click on save button present at top of left corner\\.$")
	public void click_on_save_button_present_at_top_of_left_corner() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("11111111113333333333333333");
		test.createNode(new GherkinKeyword("When"), "click on save button present at top of left corner ");
	}

	@Then("^New Company should be created \\.$")
	public void new_Company_should_be_created() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("1111111111444444444444");
	}

}
