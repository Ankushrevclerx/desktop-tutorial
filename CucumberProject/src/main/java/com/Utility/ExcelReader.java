package com.Utility;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class ExcelReader {

	
	
	String sheetlocation;
	Sheet sheet;
	List<ExcelReader> aa=new ArrayList<ExcelReader>();
	public ExcelReader(String Filelocation)
	{
		this.sheetlocation=Filelocation;
	}
	
	
	public List<Commanproperti> getData() throws FileNotFoundException
	{
	List<Commanproperti> dummy= new ArrayList<Commanproperti>();
	
		FileInputStream file=new FileInputStream(new File(sheetlocation));
		try {
			XSSFWorkbook workbook=new XSSFWorkbook(file);
			 sheet=workbook.getSheetAt(2);
	int firstrow=	sheet.getFirstRowNum();
			 
			int lastrow= sheet.getLastRowNum();
			
			
			
			for(int count=firstrow;count<lastrow-1;count++)
			{
				Commanproperti obj=new Commanproperti();
				Row row=sheet.getRow(count);
				
				//sheet.getl
				for(int column=0;column<row.getLastCellNum();column++)
				{
					if(column==0)
					obj.URl=row.getCell(column).getStringCellValue();
					//System.out.println(URl);
					if(column==1)
						obj.Username=row.getCell(column).getStringCellValue();
					//System.out.println(Username);
					if(column==2)
						obj.password=row.getCell(column).getStringCellValue();
					
					
				}
				dummy.add(obj);
			}
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return dummy;
		
		
	//	return aa;
		
	}
	
	
	public static void main(String[] args) throws FileNotFoundException
	{
		ExcelReader aa=new ExcelReader("G:\\RamProject\\criticaltest\\MindMatrix_CriticalTestCases\\MindMatrix_CriticalTestCases\\Master Sheet.xlsx");
		List<Commanproperti> aaj= aa.getData();
		String klsd=aaj.get(2).password;
		System.out.println(klsd);
	}
}
