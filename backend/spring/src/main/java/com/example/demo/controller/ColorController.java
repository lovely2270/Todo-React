package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.ColorInfo;
import com.example.demo.service.ColorService;
import com.example.demo.service.TodoService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/color")
public class ColorController {
	@Autowired
	private ColorService colorService;

	@GetMapping
	public String getColor() {
		System.out.println("getColor controller");
		return colorService.getColor();
	}

	@PutMapping
	public ColorInfo insertTodo(@RequestBody ColorInfo color) {
		System.out.println("clickColor controller");

		ColorInfo ci = new ColorInfo();
		// 여기조차..
		ci.setColorId(color.getColorId());

		colorService.clickColor(color);

		return color;
	}
}
