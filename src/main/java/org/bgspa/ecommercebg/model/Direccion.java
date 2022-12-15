package org.bgspa.ecommercebg.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="direccion")

public class Direccion {
	
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY) //se genera en automatico mi id
	@Column (name="id", unique=true, nullable=false) // es unico y no es nulo

	private Long id; //read-only
	private String colonia;
	private String calle;
	private String numero;
	private String codigo_postal;
	private String estado;
	private String ciudad;
	
	public Direccion(Long id, String colonia, String calle, String numero, String codigo_postal, String estado,
			String ciudad) {
		super();
		this.id = id;
		this.colonia = colonia;
		this.calle = calle;
		this.numero = numero;
		this.codigo_postal = codigo_postal;
		this.estado = estado;
		this.ciudad = ciudad;
	}//constructor
	
	public Direccion() {
	
	}//constructor vacio
	
	//GetersYSeters
	public String getColonia() {
		return colonia;
	}

	public void setColonia(String colonia) {
		this.colonia = colonia;
	}

	public String getCalle() {
		return calle;
	}

	public void setCalle(String calle) {
		this.calle = calle;
	}

	public String getNumero() {
		return numero;
	}

	public void setNumero(String numero) {
		this.numero = numero;
	}

	public String getCodigo_postal() {
		return codigo_postal;
	}

	public void setCodigo_postal(String codigo_postal) {
		this.codigo_postal = codigo_postal;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	public String getCiudad() {
		return ciudad;
	}

	public void setCiudad(String ciudad) {
		this.ciudad = ciudad;
	}

	public Long getId() {
		return id;
	}

	@Override
	public String toString() {
		return "Direccion [id=" + id + ", colonia=" + colonia + ", calle=" + calle + ", numero=" + numero
				+ ", codigo_postal=" + codigo_postal + ", estado=" + estado + ", ciudad=" + ciudad + "]";
	}//toString
	
}//classDireccion
