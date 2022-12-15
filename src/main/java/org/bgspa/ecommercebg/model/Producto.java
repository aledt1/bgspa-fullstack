package org.bgspa.ecommercebg.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="producto")

public class Producto {
	
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	@Column (name="id", unique=true, nullable=false) 

	private Long id; //read-only
	private String nombre;
	private String sku;
	private String descripcion;
	private double precio;
	private String categoria;
	@Column (name="img") //
	private String img;
	
	
	//constructor
	public Producto(Long id, String nombre, String sku, String descripcion, double precio, String categoria, String img) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.sku = sku;
		this.descripcion = descripcion;
		this.precio = precio;
		this.categoria = categoria;
		this.img = img;
		
	}

	//cosntructo vacio
	public Producto() {
		
	}
	//get y set
	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getSku() {
		return sku;
	}

	public void setSku(String sku) {
		this.sku = sku;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public double getPrecio() {
		return precio;
	}

	public void setPrecio(double precio) {
		this.precio = precio;
	}

	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}

	public Long getId() {
		return id;
	}
	
	
	public String getCategoria() {
		return categoria;
	}

	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}

	//to string
	@Override
	public String toString() {
		return "Producto [id=" + id + ", nombre=" + nombre + ", sku=" + sku + ", descripcion=" + descripcion
				+ ", precio=" + precio + ", categoria=" + categoria + ", img=" + img + "]";
	}

	


	
	
	
	
	
	
	
}//class producto
