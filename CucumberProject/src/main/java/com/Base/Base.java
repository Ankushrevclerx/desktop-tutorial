package com.Base;

import org.openqa.selenium.WebDriver;
import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;



public class Base {
public  static WebDriver driver;
public static ExtentReports extent;

public static ExtentTest test;
public static ExtentTest feature;
public String reportLocation="G:\\RamProject\\CucumberProject\\test-output";

public   String Featurename;
public static boolean  mailflag;
public static String username;
public static String password;
}
