package com.TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions
(features="@target/rerun.txt",
		glue= {"stepprocess"},
		dryRun=false,
		monochrome=true,
		plugin= {"pretty","html:test-output1"}
		)

public class TestRunrerun {
	 
	
	
		
	

}
