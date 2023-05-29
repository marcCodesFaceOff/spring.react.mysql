package com.app.spring.react.mysql;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@Bean
	public WebMvcConfigurer corsConfigure() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/api/roster-java-config").allowedOrigins("http://localhost:8080");
				registry.addMapping("/api/roster-java-config").allowedOrigins("http://localhost:8080/api/roster");
				registry.addMapping("/api/roster-java-config").allowedOrigins("http://localhost:3000");
				registry.addMapping("/api/roster-java-config").allowedOrigins("http://localhost:3000/view");
			}
		};
	}

}
