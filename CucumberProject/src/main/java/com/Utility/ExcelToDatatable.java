package com.Utility;

import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Locale;

import cucumber.api.DataTable;
import cucumber.api.Transformer;
import cucumber.runtime.ParameterInfo;
import cucumber.runtime.table.TableConverter;
import cucumber.runtime.xstream.LocalizedXStreams;
import gherkin.formatter.model.DataTableRow;
import io.cucumber.core.gherkin.vintage.internal.gherkin.ast.Comment;

public class ExcelToDatatable extends Transformer<DataTable> {

	@Override
	public DataTable transform(String Filelocation) {
		
		DataTable table = null ;
		ExcelReader read=new ExcelReader(Filelocation);
		try {
			
			List<DataTableRow> rowfordata=new ArrayList<DataTableRow>();
			List<Commanproperti> aa=	read.getData();
			for (Commanproperti commanproperti : aa) {
				int line=1;
				
				List<String> rowdata=new ArrayList<String>();
			gherkin.formatter.model.Comment comment=new gherkin.formatter.model.Comment(line+"", line);
				System.out.println(commanproperti.URl);
				System.out.println(commanproperti.Username);
				System.out.println(commanproperti.password);
				
				rowdata.add(commanproperti.URl);
				rowdata.add(commanproperti.Username);
				rowdata.add(commanproperti.password);
				DataTableRow tablerow=new DataTableRow(Arrays.asList(comment), rowdata, line++);
			
				rowfordata.add(tablerow);
				
				
				
				
				
				
				ParameterInfo parameterInfo = new ParameterInfo(null, null, null, null);
			    TableConverter tableConverter = new TableConverter(new LocalizedXStreams(Thread.currentThread().getContextClassLoader()).get(Locale.getDefault()), parameterInfo);
				
				 table = new DataTable(rowfordata, tableConverter);
				
			}
			
			//return table;
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return table;
		
		//List<DataTable> datarow;
		
		//DataTable
		
	}
	
	public static void main(String[] args)
	{
		ExcelToDatatable ss=new ExcelToDatatable();
		ss.transform("G:\\RamProject\\criticaltest\\MindMatrix_CriticalTestCases\\MindMatrix_CriticalTestCases\\Master Sheet.xlsx");
	}

}
