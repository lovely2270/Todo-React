package com.example.demo.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.example.demo.model.TodoInfo;

@Repository
public class TodoDao {
	
	private SqlSessionTemplate sqlSessionTemplate;
	
	@Autowired
	public void setSqlSessionTemplate(SqlSessionTemplate sqlSessionTemplate) {
		this.sqlSessionTemplate = sqlSessionTemplate;
	}

	public List<TodoInfo> getTodoList() {

		System.out.println("todoList Dao");
		return this.sqlSessionTemplate.selectList("getTodoList");
	}
	
	public List<TodoInfo> searchedTodoList(String searchText) {
		System.out.println("searchedTodoList Dao");
		return this.sqlSessionTemplate.selectList("searchedTodoList", searchText);
	}

	public List<TodoInfo> insertTodo(TodoInfo todo) {
		System.out.println("insertTodo Dao");
		this.sqlSessionTemplate.insert("insertTodo", todo);
		return this.sqlSessionTemplate.selectList("getTodoList");
	}

	public void updateTodo(String id, TodoInfo updateTodo) {
		System.out.println("updateTodo Dao");
		this.sqlSessionTemplate.update("updateTodo", updateTodo);
	}

	public void deleteTodo(String id) {
		System.out.println("deleteTodo Dao");
		this.sqlSessionTemplate.delete("deleteTodo", id);
	}

	public List<TodoInfo> deleteCheckedTodo() {
		System.out.println("deleteCheckedTodo Dao");
		this.sqlSessionTemplate.delete("deleteCheckedTodo");
		return this.sqlSessionTemplate.selectList("getTodoList");
	}

	

}
