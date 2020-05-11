package com.Pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.Utility.*;



public class Dashboardpage {

	
	WebDriver driver;
	Helper aa;
	
	
	@FindBy(xpath="//*[@class='webbannerframe']")
	WebElement dashboard;
	public Dashboardpage(WebDriver driver)
	{
		
		this.driver=driver;
		PageFactory.initElements(driver, this);
		aa=new Helper(driver);
		
	}
	
	public boolean verifylogin()
	{
		aa.waituntilswitchtoFrame(0, 30);
		driver.switchTo().defaultContent();
		if(driver.getPageSource().contains("Dashboard"))
		{ 	
			return true;
		}
		else
		{
			return false;
		}
	}
	
	
	public void jkhkfs()
	{
		
		
	}
	
	
}
