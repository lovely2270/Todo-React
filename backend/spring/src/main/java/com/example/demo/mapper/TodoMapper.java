package com.example.demo.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.model.TodoInfo;

@Mapper
public interface TodoMapper {
	
	List<TodoInfo> getTodoList();

	void insertTodo(TodoInfo todo);

	void updateTodo(int id, TodoInfo updateTodo);

	void deleteTodo(int id);
	
}
