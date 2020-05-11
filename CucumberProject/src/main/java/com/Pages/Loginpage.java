package com.Pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;



public class Loginpage {
	
	Dashboardpage dashbord;
WebDriver driver;
	@FindBy(id="email")
	public WebElement usernamee;
	
	@FindBy(id="password")
	WebElement passwordd;
	
	@FindBy(id="btnLogin")
	WebElement loginbutton;
	
	
	public Loginpage(WebDriver driver)
	{
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}
	public void navigate(String url)
	{
		driver.get(url);
	}
	
	public void username(String username)
	{
		usernamee.sendKeys(username);
	}
	public void password(String password)
	{
		passwordd.sendKeys(password);
	}
	public Dashboardpage loginButton()
	{
		dashbord = new Dashboardpage(driver);
		loginbutton.click();
		return dashbord;
	}
	

}
