package org.bgspa.ecommercebg.controller;

import java.util.Calendar;
import java.util.Date;

import javax.servlet.ServletException;

import org.bgspa.ecommercebg.jwt.config.JwtFilter;
import org.bgspa.ecommercebg.model.Token;  //Es importante la importacion desde Model
import org.bgspa.ecommercebg.model.Usuarios;
import org.bgspa.ecommercebg.service.UsuariosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;


@RestController
@RequestMapping(path = "/api/login/")
public class LoginController {
	
	private final UsuariosService usuariosService;

	@Autowired
	public LoginController(UsuariosService usuariosService) {
		super();
		this.usuariosService = usuariosService;
	}//constructor
	
	
	@PostMapping
	public Token login (@RequestBody Usuarios usuarios) throws ServletException {
		if (usuariosService.validaUsuarios(usuarios)) {
			return new Token(generateToken(usuarios.getUsuario()));
		}//if
		throw new ServletException("Nombre de usuario o contraseña incorrectos.");
	}//login
	

	private String generateToken(String username) {
		Calendar calendar = Calendar.getInstance();
		calendar.add(Calendar.HOUR, 10);
		return Jwts.builder().setSubject(username).claim("role", "user")
				.setIssuedAt(new Date()).setExpiration(calendar.getTime())
				.signWith(SignatureAlgorithm.HS256, JwtFilter.secret).compact();
	}// generateToken
	
		
	
}//class LoginController
