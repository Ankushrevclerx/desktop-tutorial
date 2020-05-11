package com.Listner;

import org.testng.ITestContext;
import org.testng.ITestListener;
import org.testng.ITestResult;

import com.Base.Base;
import com.Utility.ExtentReportUtil;

import cucumber.api.testng.TestNGCucumberRunner;




public class ITestListnerr implements ITestListener  {
	
ExtentReportUtil aa=new ExtentReportUtil();
	@Override
	public void onFinish(ITestContext arg0) {
		// TODO Auto-generated method stub
		// System.out.println("finnnnnnnnnnnnnned");
		
		aa.FlushReport();
	}

	@Override
	public void onStart(ITestContext arg0) {
		// TODO Auto-generated method stub

		aa.ExtentReport();
		

	}

	@Override
	public void onTestFailedButWithinSuccessPercentage(ITestResult arg0) {
		// TODO Auto-generated method stub

	}

	@Override
	public void onTestFailure(ITestResult arg0) {
		// TODO Auto-generated method stub
		System.out.println("can take screenshot of failed cases and send mail...."+arg0.getThrowable());
	
	if(Base.mailflag)
	{
		//sendMail(arg0.getThrowable());
		
		
		
		System.out.println("mail ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		Base.mailflag=false;
	}
	
	}

	@Override
	public void onTestSkipped(ITestResult arg0) {
		// TODO Auto-generated method stub

		System.out.println("Hear we can right any report printing lines for skiped case..");

	}

	@Override
	public void onTestStart(ITestResult arg0) {
		// TODO Auto-generated method stub
		// Base gg=new Base();
		
	//	Scenario dd=new ITestListnerr();
		//System.out.println(CucumberHelper.scenario.getName());
	
		System.out.println("oneteststratllllllllllllllllll");

		// System.out.println(arg0.getInstance().);
		
		//FeatureResultListener 
		//Feature
		
		
	}

	@Override
	public void onTestSuccess(ITestResult arg0) {
		// TODO Auto-generated method stub

		System.out.println("lisner after test sucess");

	}

}
