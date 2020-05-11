package com.Utility;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import com.Base.Base;
import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.reporter.ExtentHtmlReporter;
import com.aventstack.extentreports.reporter.configuration.Theme;


public class ExtentReportUtil  extends Base{

	String fileName = reportLocation + "extentreport.html";


    public void ExtentReport() {
        //First is to create Extent Reports
        extent = new ExtentReports();

        ExtentHtmlReporter htmlReporter = new ExtentHtmlReporter(fileName);
        htmlReporter.config().setTheme(Theme.DARK);
        htmlReporter.config().setDocumentTitle("Test report for Selenium Basic");
        htmlReporter.config().setEncoding("utf-8");
        htmlReporter.config().setReportName("Test report");

        extent.attachReporter(htmlReporter);
        

    }
    
    
    
    public void takescreenshot()throws IOException 
    {
    	File ss=((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
    	Files.copy(ss.toPath(), new File(reportLocation + "screenshot.png").toPath());
    	test.addScreenCaptureFromPath(reportLocation+"screenshot.png");
    }
    
    public void FlushReport(){
        extent.flush();
    }

   


}
