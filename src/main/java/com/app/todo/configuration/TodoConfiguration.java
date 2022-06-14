package com.app.todo.configuration;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class TodoConfiguration {
	
	@Value("${spring.datasource.url}")
	private String url;
	@Value("${spring.datasource.username}")
	private String username;
	@Value("${spring.datasource.password}")
	private String password;
//	@Value("${spring.datasource.driver-class-name}")
//	private String driver;
	
	@Bean
	public DataSource dataSource() {
		
		return DataSourceBuilder.create()
				.url(url)
				.username(username)
				.password(password)
				.build();
	}
}