package com.app.todo.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.todo.model.Response;
import com.app.todo.model.Todo;
import com.app.todo.repository.TodoRepository;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/todo-app")
public class TodoController {
	
	private Logger logger = LoggerFactory.getLogger(TodoController.class);
	
	@Autowired
	TodoRepository repository;
	
	@GetMapping("/getAllTodos")
	public List<Todo> getAllTodos() {
		List<Todo> todos = repository.findAll();
		return todos;
	}
	
	@PostMapping("/saveTodo")
	public ResponseEntity<Response> saveTodo(@RequestBody Todo todo) {
		Response response = new Response(200, "Data Saved !");
		try {
			repository.save(todo);
		} catch(Exception e) {
			logger.error("",e);
			response = new Response(409, "An Error Occured ! - "+e.getLocalizedMessage());
		}
		return new ResponseEntity<>(response,HttpStatus.OK);
	}
	
	@PostMapping("/deleteTodo")
	public ResponseEntity<Response> deletreTodo(@RequestParam("id") Integer id) {
		Response response = new Response(200, "Data Deleted !");
		try {
			repository.deleteById(id);
		} catch(Exception e) {
			logger.error("",e);
			response = new Response(409, "An Error Occured ! - "+e.getLocalizedMessage());
		}
		return new ResponseEntity<Response>(response,HttpStatus.OK);
	}
}
