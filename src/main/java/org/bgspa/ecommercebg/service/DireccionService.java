package org.bgspa.ecommercebg.service;

import java.util.List;

import org.bgspa.ecommercebg.model.Direccion;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DireccionService {
	private final DireccionRepository direccionRepository;

	@Autowired
	public DireccionService(DireccionRepository direccionRepository) {
		super();
		this.direccionRepository = direccionRepository;
	}//constructor
	
	public List<Direccion> getDirecciones(){
		return direccionRepository.findAll();
	}
	
	public Direccion getDireccion(Long id){
		return direccionRepository.findById(id).orElseThrow( 
				()->new IllegalArgumentException("La direccion con id" +id +"no existe.")
				);
	}//getProducto
	
	
	public Direccion deleteDireccion (Long id) {
		Direccion tmpProd = null;
		if (direccionRepository.existsById(id)) {
			tmpProd = direccionRepository.findById(id).get();
			direccionRepository.deleteById(id);
		}//if exist
		return tmpProd;
	}//deleteDireccion
	
	
	public Direccion addDireccion(Direccion direccion) {
		return direccionRepository.save(direccion);
	}//addProducto
	
	public Direccion updateDireccion(Long id, String colonia, String calle, String numero, String codigo_postal, String estado, String ciudad) {
		Direccion tmpProd = null;
		if (direccionRepository.existsById(id)) {
			tmpProd = direccionRepository.findById(id).get();
			if (colonia!=null) tmpProd.setColonia(colonia);
			if (calle!=null)tmpProd.setCalle(calle);
			if (numero!=null) tmpProd.setNumero(numero);
			if (codigo_postal!=null) tmpProd.setCodigo_postal(codigo_postal);
			if (estado!=null) tmpProd.setEstado(estado);
			if (ciudad!=null) tmpProd.setCiudad(ciudad);
			direccionRepository.save(tmpProd);
		}else {
			System.out.println("Update - La direccion con el id " + id + "no existe.");
		}//else
		return tmpProd;
	}//update
	
}//class DireccionService
