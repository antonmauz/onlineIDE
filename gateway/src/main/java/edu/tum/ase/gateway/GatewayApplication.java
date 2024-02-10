package edu.tum.ase.gateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import reactor.core.publisher.Mono;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.ReactiveSecurityContextHolder;

@SpringBootApplication
@RestController
// @EnableDiscoveryClient
// @EnableOAuth2Sso
public class GatewayApplication {
    public static void main(String[] args) {
        SpringApplication.run(GatewayApplication.class, args);
    }

    @GetMapping("/api/authenticated")
    public Mono<Boolean> authenticated() {
        return ReactiveSecurityContextHolder.getContext()
                .map(securityContext -> {
                    Authentication authentication = securityContext.getAuthentication();
                    System.out.println("SecurityContext: " + securityContext);
                    if (authentication != null) {
                        System.out.println("Authentication: " + authentication);
                        System.out.println("Authorities: " + authentication.getAuthorities());
                        return authentication.getAuthorities().stream()
                                .noneMatch(
                                        grantedAuthority -> grantedAuthority.getAuthority().equals("ROLE_ANONYMOUS"));
                    }
                    return false;
                });
    }
}
