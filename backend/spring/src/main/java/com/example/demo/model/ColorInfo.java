package com.example.demo.model;

import lombok.Data;

@Data
public class ColorInfo {
	
	
	private String colorId;
	
	public void setColorId(String color) {
		this.colorId = color;
	}
	public String getColorId() {
		return this.colorId;
	}
}
