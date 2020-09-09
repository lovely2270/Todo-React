package com.example.demo.dao;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.example.demo.model.ColorInfo;

@Repository
public class ColorDao {

	private SqlSessionTemplate sqlSessionTemplate;
	
	@Autowired
	public void setSqlSessionTemplate(SqlSessionTemplate sqlSessionTemplate) {
		this.sqlSessionTemplate = sqlSessionTemplate;
	}
	
	public String getColor() {
		System.out.println("getColor Dao");
		this.sqlSessionTemplate.insert("insertDefaultColor");
		return this.sqlSessionTemplate.selectOne("getColor");
	}

	public void clickColor(ColorInfo color) {
		System.out.println("clickColor Dao");
		this.sqlSessionTemplate.update("clickColor", color);
	}
}
