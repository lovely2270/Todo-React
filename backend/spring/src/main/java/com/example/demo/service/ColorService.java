package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.ColorDao;
import com.example.demo.model.ColorInfo;

@Service
public class ColorService {
	@Autowired
	private ColorDao colorDao;
	
	public String getColor() {
		
		return colorDao.getColor();
	}

	public void clickColor(ColorInfo color) {
		colorDao.clickColor(color);
		
	}

}
