package org.bgspa.ecommercebg.service;

import java.util.List;

import org.bgspa.ecommercebg.model.Categorias;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoriasService {
	private final CategoriasRepository categoriasRepository;
	
	//---Constructor------------------------------------------------
	@Autowired 
	public CategoriasService(CategoriasRepository categoriasRepository) {
		super();
		this.categoriasRepository = categoriasRepository;
	}//constructor
	
	//-----Get Categorias y Categoria---------------------------------
	public List<Categorias> getCategorias(){
		return categoriasRepository.findAll();
	}//getCategorias
	
	public Categorias getCategorias(Long id){
		return categoriasRepository.findById(id).orElseThrow( 
				()->new IllegalArgumentException("La categoria con id" +id +"no existe.")
				);
	}//getCategoria
	
	public Categorias deleteCategorias (Long id) {
		Categorias tmpProd = null;
		if (categoriasRepository.existsById(id)) {
			tmpProd = categoriasRepository.findById(id).get();
			categoriasRepository.deleteById(id);
		}//if exist
		return tmpProd;
	}//deleteCategoria
	
	public Categorias addCategorias(Categorias categorias) {
		return categoriasRepository.save(categorias);
	}//addCategoria
	
	public Categorias updateCategorias(Long id, String nombre) {
		Categorias tmpProd = null;
		if (categoriasRepository.existsById(id)) {
			tmpProd = categoriasRepository.findById(id).get();
			if (nombre!=null) tmpProd.setNombre(nombre);
			categoriasRepository.save(tmpProd);
		}else {
			System.out.println("Update - La categoría con el id " + id + "no existe.");
		}//else
		return tmpProd;
	}//updateCategoria
	
	
}//class CategoriaService
