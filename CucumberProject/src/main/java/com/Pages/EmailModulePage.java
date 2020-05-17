package com.Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.Utility.Helper;

public class EmailModulePage {
	WebDriver driver;
	Helper help;
	public EmailModulePage(WebDriver driver)
	{
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}
	@FindBy(xpath = "//*[@class='inbox-side-bar inbox-sidebar-ui-fix hidden-sm hidden-xs']/a/strong")
	public WebElement usernamee;
	
	@FindBy(xpath = "//*[@id='s2id_autogen36']")
	public WebElement tofield;

	@FindBy(xpath = "//*[@id='wizardNext']/div[1]/i")
	WebElement nextButton;
	
	
	@FindBy(xpath = "//*[@id='txtSubjectLine']")
	WebElement subjectTextField;
	@FindBy(xpath = "//body[@class='horizontal-nav desktop-detected modal-open']/div[@id='modalWizard']/div[contains(@class,'modal-dialog modal-xg')]/div[@class='modal-content']/div[@class='modal-header fuelux']/div[@class='row']/div[@class='wizard col-md-9 col-sm-12']/div[@class='wizard-actions']/div[1]/a")
	public WebElement nextbutton;
	@FindBy(xpath = "//div[@class='select2-result-label']//div//div[1]")
	public WebElement emaildropdown;

	@FindBy(xpath = "//div[contains(text(),'Send')]")
	public WebElement sendbutton;

	public void clickonComposeButton()
	{
		help=new Helper(driver);
		help.waituntilElementClickable(usernamee);
		usernamee.click();
	}
	public void nextButtonArrow()
	{
		help=new Helper(driver);
		help.waituntilElementClickable(nextButton);
		try {
			Thread.sleep(15000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		nextButton.click();
	}
	
	public void typeTextFieldssubject(String data)
	{
		help=new Helper(driver);
		try {
			Thread.sleep(20000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		//help.waitForElement(subjectTextField);
		subjectTextField.sendKeys(data);
	}
	
	public void nextbutton() throws InterruptedException {
		Thread.sleep(10);
		JavascriptExecutor ab = (JavascriptExecutor) driver;
		ab.executeScript("arguments[0].click();", nextbutton);
	}
	
	
	
	public void tofield(String value) {
		tofield.sendKeys(value);
	}

	public void emaildropdown() throws InterruptedException {

		Thread.sleep(10);
		JavascriptExecutor ab = (JavascriptExecutor) driver;
		ab.executeScript("arguments[0].click();", emaildropdown);
	}

	public void sendbutton() throws InterruptedException {
		Thread.sleep(10);
		JavascriptExecutor ab = (JavascriptExecutor) driver;
		ab.executeScript("arguments[0].click();", sendbutton);
	}
}
