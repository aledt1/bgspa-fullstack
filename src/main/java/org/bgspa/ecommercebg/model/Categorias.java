package org.bgspa.ecommercebg.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

//pojo

@Entity
@Table(name="categorias")


public class Categorias {
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	@Column (name="id", unique=true, nullable=false)
	
	private Long id; //read-only
	private String nombre;
	
	//----CONSTRUCTOR CATEGORIAS---------------------------------------
	public Categorias(Long id, String nombre) {
		super();
		this.id = id;
		this.nombre = nombre;
	}//Constructor
	
	public Categorias() {
			
	}//Constructor vacio 

	//----GET Y SET DE CATEGORIAS---------------------------------------
	public String getNombre() {
		return nombre;
	}//getNombre

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}//setNombre

	public Long getId() {
		return id;
	}//getId

	//----toString DE CATEGORIAS---------------------------------------
	@Override
	public String toString() {
		return "Categorias [id=" + id + ", nombre=" + nombre + "]";
	}//toString
	
	
}//class categorias
