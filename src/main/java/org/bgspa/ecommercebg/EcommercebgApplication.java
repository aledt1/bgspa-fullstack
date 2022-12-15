package org.bgspa.ecommercebg;

import org.bgspa.ecommercebg.jwt.config.JwtFilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
//import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class EcommercebgApplication {

	public static void main(String[] args) {
		SpringApplication.run(EcommercebgApplication.class, args);
	}//main
	
	//@Bean //componente que nos ayuda a filtrar. Genera un filtro al priincipio cuando carga la aplicacion
	public FilterRegistrationBean<JwtFilter> jwtFilter(){
		FilterRegistrationBean<JwtFilter> registrationBean = new FilterRegistrationBean<>();
		registrationBean.setFilter(new JwtFilter());
		registrationBean.addUrlPatterns("/api/productos/*");
		registrationBean.addUrlPatterns("/api/usuarios/*");
		return registrationBean;
	}//jwtFilter
	
	

}//class