package com.Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.Utility.Helper;



//*[@class='btn btn-primary btn-block']

public class OpportunityPage {
	WebDriver driver;
	Helper help;
	@FindBy(xpath = "//*[@class='btn btn-primary btn-block']")
	WebElement CreateButton;
	
	@FindBy(xpath = "//*[@id='name']")
	WebElement NameLabel;
	//*[@class='btn btn-primary btn-block']
	@FindBy(xpath = "//*[@id='name']")
	WebElement opportunityName;
	
	
	@FindBy(xpath = "//*[@id='wizardNext']")
	WebElement NextArrow;
	
	@FindBy(xpath = "//*[@id='#_Opportunity Fields']/ul/li/a")
	WebElement addAnotherFormField;
	
	@FindBy(xpath = "//*[@id='div_tab']/li/a")
	WebElement AddNewTab;
	
	
	
	@FindBy(xpath = "//*[@id='wizardNext']/div[1]/i")
	WebElement saveButton;
	
	
	@FindBy(xpath = "//*[@id='MsgBoxBack']/div/child::div/div/child::button[2]")
	WebElement conformpopup;
	
	
	@FindBy(xpath = "//*[@class='modal-body clearfix']/div/div[2]/div/div/label/i")
	WebElement checkbox;
	public  OpportunityPage(WebDriver driver)
	{
		this.driver=driver;
		PageFactory.initElements(driver, this);
		help=new Helper(driver);
	}
	
	public void createbutton()
	{
		
		help.waitForElement(CreateButton);
		CreateButton.click();
	}
	
	public boolean  oportunitywindow()
	{
		
		if(help.waitForElement(NameLabel))
		{
			return true;
		}
		else
		{
			return false;
		}
		
	}
	
	
	public void FillingData(String data)
	{
		opportunityName.clear();
		opportunityName.sendKeys(data);
	}
	
	
	public void nextbuttonArrow()
	{
		NextArrow.click();
		
	}
	public void saveButtonClick()
	{
		saveButton.click();
		
	}
	
	
	public boolean visibiltyofAddanotherForm()
	{
		help=new Helper(driver);
		if(help.waitForElement(addAnotherFormField))
		{
			return true;
		}
		else
		{
			return false;
		}
	}
		
		public void clickOnStepProcessCheckBox()
		{
			help.waitForElement(checkbox);
			
			checkbox.click();
			
	}
	public boolean visibilityOfAddNewTab()
	{
		
		if(help.waitForElement(AddNewTab))
		{
			return true;
		}
		else
		{
			return false;
		}
		
		
	}
public boolean searchingCreatedOpportunity(String opportunity)
{
	
	
	WebElement element=driver.findElement(By.xpath("//*[@id='msg1']/td[2]/div/span[text()='"+opportunity+"']"));
	
	if(help.waitForElement(element))
	{
		return true;
	}
	else
	{
		return false;
	}
	
	
	
	
}
	
public void clickonconformPopup()
{
	conformpopup.click();
}
	
}
