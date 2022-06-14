package com.app.todo.model;

public class Response {
	private Integer statusCode;
	private String message;

	public Response() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Response(Integer statusCode, String message) {
		super();
		this.statusCode = statusCode;
		this.message = message;
	}

	public Integer getStatusCode() {
		return statusCode;
	}

	public void setStatusCode(Integer statusCode) {
		this.statusCode = statusCode;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return "Response [statusCode=" + statusCode + ", message=" + message + "]";
	}

}
