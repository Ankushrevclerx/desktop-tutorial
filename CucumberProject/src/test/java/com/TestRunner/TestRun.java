package com.TestRunner;

import java.io.FileReader;
import java.util.Map;

import org.junit.runner.RunWith;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Listeners;
import org.testng.annotations.Test;
import org.testng.internal.annotations.BeforeSuiteAnnotation;


import com.github.mkolisnyk.cucumber.runner.BeforeSubSuite;
import com.github.mkolisnyk.cucumber.runner.ExtendedCucumber;
import com.github.mkolisnyk.cucumber.runner.ExtendedCucumberOptions;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import cucumber.api.CucumberOptions;
import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import cucumber.api.testng.CucumberFeatureWrapper;
import cucumber.api.testng.TestNGCucumberRunner;
import cucumber.runtime.model.CucumberFeature;
import gherkin.ast.Feature;

@RunWith(ExtendedCucumber.class)


@ExtendedCucumberOptions(
        jsonReport = "target/cucumber-reports/CucumberTestReport.json",
        retryCount = 0,
        detailedReport = true,
        detailedAggregatedReport = true,
        overviewReport = true,
        coverageReport = true,
        jsonUsageReport = "target/cucumber-reports/cucumber-usage.json",
        usageReport = false,
        toPDF = true,
        excludeCoverageTags = {"@flaky" },
        includeCoverageTags = {"@passed" },
        outputFolder = "target/cucumber-reports/extended-report")

@CucumberOptions(
		features="./src/test/resources",
		glue= {"stepprocess"},
		dryRun=false,
		monochrome=true,
		plugin= {"pretty","html:test-output1","rerun:target/rerun.txt"}
		
		)

public class TestRun extends AbstractTestNGCucumberTests  {
	
	private TestNGCucumberRunner testNGCucumberRunner;

    @BeforeClass(alwaysRun = true)
    public void setUpClass() throws Exception {
        testNGCucumberRunner = new TestNGCucumberRunner(this.getClass());
    }

    @Test(groups = "cucumber", description = "Runs Cucumber Feature", dataProvider = "datafetch")
    public void feature(String name, String pass, String io) {
    	//Base.username=name;
    	//Base.password=pass;
    	//System.out.println(cucumberFeature[0]);
    //	System.out.println(cucumberFeature[1]);
    	//System.out.println(((CucumberFeatureWrapper)testNGCucumberRunner.provideFeatures()[0][0]).getCucumberFeature());
    	//System.out.println(cucumberFeature.getCucumberFeature());
  /*  testNGCucumberRunner.runCucumber(((CucumberFeatureWrapper)testNGCucumberRunner.provideFeatures()[0][0]).getCucumberFeature());
    	
    	
    }

    @DataProvider
    public Object[][] features() {
        return testNGCucumberRunner.provideFeatures();
    }

    @AfterClass(alwaysRun = true)
    public void tearDownClass() throws Exception {
        testNGCucumberRunner.finish();
    }
    
    
    
    
    
    
    
Object[][] datas;
	
	
	
	
	
	@DataProvider
	public Object[][] datafetch()
	{
		return gettestdata();
		
	}
	
	//@Test(dataProvider = "datafetch")
	public void test(String user, String pass, String email)
	{
		System.out.println(user+"       "+pass+"      "+email);
		
		AbstractTestNGCucumberTests aa=new AbstractTestNGCucumberTests() {
		};
		TestNGCucumberRunner runner=new TestNGCucumberRunner(this.getClass());
		//System.out.println(runner.);
		
		
	//	System.out.println(runner.provideFeatures());
		
		
	}
	
	
	
	
	
	public Object[][] gettestdata()
	{
		
		
		
		JsonParser par=new JsonParser();
	try {
		JsonObject obj=	par.parse(new FileReader("G:\\RamProject\\CucumberProject\\src\\test\\resources\\JsonData.json")).getAsJsonObject();
JsonArray datainarray=(JsonArray)obj.get("Dataformatt");
	
 datas=new Object[2][3];

int i=0;
int j=0;

for (JsonElement jsonElement : datainarray) {
	
	for (Map.Entry<String, JsonElement> element : jsonElement.getAsJsonObject().entrySet()) {
		//System.out.println(element);
		datas[i][j]=element.getValue().toString().replace("\"","");
				j++;
		
	}
	i++;
	j=0;
}
	
	}  catch (Exception e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	return datas;*/
		
	}
	




	}
