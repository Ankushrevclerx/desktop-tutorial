package com.Utility;

import java.util.List;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Helper {
	WebDriver driver;
	
	public Helper(WebDriver driver)
	{
		this.driver=driver;
	}

			
			public void waituntilswitchtoFrame(int framenum, int wat)
			{
				WebDriverWait wait=new WebDriverWait(driver, wat);
				wait.until(ExpectedConditions.frameToBeAvailableAndSwitchToIt(framenum));
			}
			
			
			public boolean waitForElement(WebElement xpath)
			{
				int flag=0;
				try
				{
					WebDriverWait wait=new WebDriverWait(driver, 30);
					wait.until(ExpectedConditions.visibilityOf(xpath));
					
				}
				catch (Exception e) {
					// TODO: handle exception
					flag=1;
					
				}
			if(flag==1)	
			{
				return false;
			}
			else
			{
				return true;
			}
			}
}
