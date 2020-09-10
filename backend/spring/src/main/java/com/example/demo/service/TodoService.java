package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.TodoDao;
import com.example.demo.model.TodoInfo;

@Service
public class TodoService {

	@Autowired
	private TodoDao todoDao;
	
	public List<TodoInfo> getTodoList() {
		
		return todoDao.getTodoList();
	}
	
	public List<TodoInfo> searchedTodoList(String searchText) {

		return todoDao.searchedTodoList(searchText);
	}

	public List<TodoInfo> insertTodo(TodoInfo todo) {
		return todoDao.insertTodo(todo);
	}

	public void updateTodo(String id, TodoInfo updateTodo) {
		todoDao.updateTodo(id, updateTodo);
	}

	public void deleteTodo(String id) {
		todoDao.deleteTodo(id);
	}

	public List<TodoInfo> deleteCheckedTodo() {
		return todoDao.deleteCheckedTodo();
		
	}

	

}
