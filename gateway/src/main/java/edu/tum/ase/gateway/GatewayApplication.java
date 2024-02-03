package edu.tum.ase.gateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class GatewayApplication {
	@Bean
	public RouteLocator customRouteLocator(RouteLocatorBuilder builder) {
		return builder.routes()
				.route("project-service", r -> r.path("/project/**")
						.filters(f -> f.rewritePath("/project/(?<segment>.*)", "/${segment}"))
						.uri("lb://project-service"))
				.route("ui-service", r -> r.path("/**")
						.filters(f -> f.rewritePath("/ui/(?<segment>.*)", "/${segment}"))
						.uri("lb://ui-service"))
				.build();
	}

	public static void main(String[] args) {
		SpringApplication.run(GatewayApplication.class, args);
	}

}
