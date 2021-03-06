package com.example.demo.controller;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.TodoInfo;
import com.example.demo.service.TodoService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/todos")
public class TodoController {
	@Autowired
	private TodoService todoService;
	
	//할 일 리스트 가져오기
	@GetMapping
	public List<TodoInfo> todoList() {
		System.out.println("todoList controller");
		return todoService.getTodoList();
	}
	
	//검색된 할 일 리스트 가져오기
	@GetMapping("{searchText}")
	public List<TodoInfo> searchedTodoList(@PathVariable String searchText) {
		System.out.println("searchedTodoList controller");
		return todoService.searchedTodoList(searchText);
	}
	
	//할 일 추가
	@PostMapping
	public List<TodoInfo> insertTodo(@RequestBody TodoInfo todo) {
		System.out.println("insertTodo controller");
		
		todo.setId(UUID.randomUUID().toString().replaceAll("-", ""));
		todo.setChecked(false);
		todo.setCreateTime(Timestamp.valueOf(LocalDateTime.now()));

		return todoService.insertTodo(todo);
	}
	
	//할 일 수정
	@PutMapping("{id}")
	public void updateTodo(@PathVariable String id,@RequestBody TodoInfo todo) {
		System.out.println("updateTodo controller");
		TodoInfo updateTodo = todo;
		
		updateTodo.setChecked(todo.getChecked());
		updateTodo.setText(todo.getText());
		
		todoService.updateTodo(id,updateTodo);
	}
	
	//할 일 삭제
	@DeleteMapping("{id}")
	public void deleteTodo(@PathVariable String id) {
		System.out.println("deleteTodo controller");
		todoService.deleteTodo(id);
	}
	
	//할 일 삭제
	@DeleteMapping
	public List<TodoInfo> deleteCheckedTodo() {
		System.out.println("deleteCheckedTodo controller");
		return todoService.deleteCheckedTodo();
	}
}
