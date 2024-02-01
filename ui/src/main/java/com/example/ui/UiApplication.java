package com.example.ui;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import jakarta.servlet.http.HttpServletRequest;

@SpringBootApplication
public class UiApplication {

	public static void main(String[] args) {
		SpringApplication.run(UiApplication.class, args);
	}

	@Configuration
	public class WebMvcConfiguration implements WebMvcConfigurer {
		@Override
		public void addResourceHandlers(ResourceHandlerRegistry registry) {
			// Serve static resources
			registry.addResourceHandler("/static/browser/**")
					.addResourceLocations("classpath:/static/browser/");
		}

	}

    @Controller
    public class ForwardToIndexController {

        @RequestMapping(value = "/**/{[path:[^\\.]*}")
        public String forward(HttpServletRequest request) {
            return "forward:/index.html";
        }
    }
}
