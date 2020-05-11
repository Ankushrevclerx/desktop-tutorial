package com.TestRunner;

import java.awt.AWTException;
import java.awt.Robot;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.testng.annotations.Test;

import com.sun.corba.se.spi.orbutil.fsm.Action;

import javafx.scene.control.Tab;

public class Practice {
	
	@Test
	public void alert()
	{
		System.setProperty("webdriver.chrome.driver","G:\\RamProject\\criticaltest\\MindMatrix_CriticalTestCases\\CriticalTestCase\\Drivers\\chromedriver.exe");
	
	WebDriver driver=new ChromeDriver();
	driver.get("https://www.javaworld.com/article/2076841/designing-with-interfaces.html");
	
//	driver.findElement(By.xpath("/html/body/form/table/tbody/tr[2]/td[2]/input")).sendKeys("12");
//	driver.findElement(By.xpath("/html/body/form/table/tbody/tr[3]/td[2]/input[1]")).click();
//	
//	System.out.println(driver.switchTo().alert().getText());
//	driver.switchTo().alert().accept();
//	driver.switchTo().alert().accept();
	Actions action=new Actions(driver);
//	WebElement elemet=driver.findElement(By.xpath("//*[@id='navbar-brand-centered']/ul/li[3]/a"));
//	WebElement elemett=driver.findElement(By.xpath("//*[@id='navbar-brand-centered']/ul/li[11]/a"));
	action.sendKeys(Keys.PAGE_DOWN).build().perform();
	Robot nff;
	try {
		nff = new Robot();
		nff.mousePress(1);
	} catch (AWTException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	}
}