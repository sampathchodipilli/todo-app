package com.app.todo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.todo.model.Todo;

public interface TodoRepository extends JpaRepository<Todo, Integer> {
	
}
