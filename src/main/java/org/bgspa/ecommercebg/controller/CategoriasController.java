package org.bgspa.ecommercebg.controller;

import java.util.List;

import org.bgspa.ecommercebg.model.Categorias;
import org.bgspa.ecommercebg.service.CategoriasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path="/api/categorias/")
public class CategoriasController {
	
	private final CategoriasService categoriasService ;
	
	@Autowired 
	public CategoriasController(CategoriasService categoriasService) {
		super();
		this.categoriasService = categoriasService;
	}
	
	@GetMapping
	public List<Categorias> getAllcategorias(){
		return categoriasService.getCategorias();
	}//getAllpro
	
	@GetMapping (path="{cateId}") // http
	public Categorias getCategorias(@PathVariable("cateId")Long id){
		return categoriasService.getCategorias(id);
	}//getAllpro
	
	@DeleteMapping (path = "{cateId}") 
	public Categorias deleteCategorias(@PathVariable("cateId") Long id) {
		return categoriasService.deleteCategorias(id);
	}//deleteCategoria
	
	@PostMapping
	public Categorias addCategorias(@RequestBody Categorias categorias) {
		return categoriasService.addCategorias(categorias);
	}//addCategoria
	
	@PutMapping(path = "{cateId}") 
	public Categorias updateCategorias(@PathVariable("cateId") Long id,
			@RequestParam(required = false) String nombre){
			return categoriasService.updateCategorias(id, nombre);
	}//updateCategoria
	

}
