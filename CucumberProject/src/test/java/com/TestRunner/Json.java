package com.TestRunner;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.Map;
import java.util.Map.Entry;

import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonIOException;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.google.gson.JsonSyntaxException;

import cucumber.api.testng.AbstractTestNGCucumberTests;
import cucumber.api.testng.TestNGCucumberRunner;





public class Json {

	Object[][] datas;
	
	
	
	
	
	@DataProvider
	public Object[][] datafetch()
	{
		return gettestdata();
		
	}
	
	@Test(dataProvider = "datafetch")
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
	return datas;
		
	}
	



}
