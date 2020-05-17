package stepprocess;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.Base.Base;
import com.Pages.Dashboardpage;
import com.Pages.Loginpage;

import cucumber.api.java.After;
import cucumber.api.java.en.*;
import io.cucumber.java.Before;
import junit.framework.Assert;

public class EmailModule extends Base {
	
	WebDriver driver;
	Loginpage aa;
	Dashboardpage dashbord;
	com.Pages.EmailModulePage email;
	
	
	
	@Given("^User Navigate to  (.+)")
	public void user_Navigate_to_https_members_cloudvoicealliance_com(String url) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   
		
		System.setProperty("webdriver.chrome.driver","G:\\RamProject\\criticaltest\\MindMatrix_CriticalTestCases\\MindMatrix_CriticalTestCases\\Drivers\\chromedriver.exe");
		driver = new ChromeDriver();

		driver.get(url);
	}

	@When("^User enter valid user (.+) and password (.+) and Click into login button\\.$")
	public void user_enter_valid_user_pkumar_and_password_piyush_and_Click_into_login_button(String user, String  pass) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		aa = new Loginpage(driver);
		aa.username(user);
		aa.password(pass);
		dashbord = aa.loginButton();

	}

	@Then("^Dashboard page should be visible$")
	public void dashboard_page_should_be_visible() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Assert.assertEquals(true, dashbord.verifylogin());
	}

	@When("^user navigate to Email module for instal (.+) and click into compose button$")
	public void user_navigate_to_Email_module_for_instal_https_members_cloudvoicealliance_com_and_click_into_compose_button(String url) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		email=new com.Pages.EmailModulePage(driver);
	    driver.get(url+"/#communicate/email");
	    email.clickonComposeButton();
	}

	@And("^click on next button without selecting anything\\.$")
	public void click_on_next_button_without_selecting_anything() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    email.nextButtonArrow();
	}

	@And("^Enter \"(.*?)\" in subject field\\.$")
	public void enter_in_subject_field(String data) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   
		WebDriverWait wait=new WebDriverWait(driver, 50);
		wait.until(ExpectedConditions.frameToBeAvailableAndSwitchToIt(0));
	
		email.typeTextFieldssubject(data);
		
		driver.switchTo().defaultContent();
	}
	@When("^click on next NextArrow$")
	public void click_on_next_NextArrow() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		WebDriverWait wait = new WebDriverWait(driver, 30);
		WebElement element = wait.until(
		        ExpectedConditions.visibilityOfElementLocated(By.xpath("//body[@class='horizontal-nav desktop-detected modal-open']/div[@id='modalWizard']/div[contains(@class,'modal-dialog modal-xg')]/div[@class='modal-content']/div[@class='modal-header fuelux']/div[@class='row']/div[@class='wizard col-md-9 col-sm-12']/div[@class='wizard-actions']/div[1]/a")));
	
		//eu.nextbutton();
	
		
		
		email.nextbutton();
	}


	@When("^Enter \"(.*?)\" on To field$")
	public void enter_on_To_field(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		
		WebDriverWait wait = new WebDriverWait(driver, 30);
		WebElement element = wait.until(
		        ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id='s2id_autogen36']")));
		
		
	email.tofield(arg1);
	WebDriverWait wait1 = new WebDriverWait(driver, 30);
	//WebElement element = 
			wait1.until(
	        ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@class='select2-result-label']//div//div[1]")));
			driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS) ;
			//eu.emaildropdown();	
			email.emaildropdown.click();

	    
	}

	@When("^click on send button$")
	public void click_on_send_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		
		email.sendbutton();

	}

	@Then("^Email should created with new data\\.$")
	public void email_should_created_with_new_data() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

}
