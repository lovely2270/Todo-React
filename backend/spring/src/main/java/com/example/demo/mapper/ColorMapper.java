package com.example.demo.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.model.ColorInfo;
import com.example.demo.model.TodoInfo;

@Mapper
public interface ColorMapper {
	
	int getColor();

	ColorInfo insertTodo(ColorInfo colorId) ;
}
