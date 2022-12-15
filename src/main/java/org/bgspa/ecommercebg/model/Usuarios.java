package org.bgspa.ecommercebg.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="usuarios")

public class Usuarios {
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY) 
	@Column (name="id", unique=true, nullable=false)
	private Long id;
	private String nombre;
	private String apellido;
	private String telefono;
	@Column (name="email", nullable=false)
	private String usuario;
	@Column (name="contrasena", nullable=false)
	private String contrasena;
	
	//constructor
	public Usuarios(Long id, String nombre, String apellido, String telefono, String usuario, String contrasena) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.apellido = apellido;
		this.telefono = telefono;
		this.usuario = usuario;
		this.contrasena = contrasena;
	}
	
	//constructor vacio
	public Usuarios() {
		
	}
	
	//Getters and Setters

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	public String getUsuario() {
		return usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}

	public String getContrasena() {
		return contrasena;
	}

	public void setContrasena(String contrasena) {
		this.contrasena = contrasena;
	}

	public Long getId() {
		return id;
	}
	
	
	//toString
	@Override
	public String toString() {
		return "Usuarios [id=" + id + ", nombre=" + nombre + ", apellido=" + apellido + ", telefono=" + telefono
				+ ", usuario=" + usuario + ", contrasena=" + contrasena + "]";
	}

	
}// class usuarios
