package org.bgspa.ecommercebg.controller;


import java.util.List;

import org.bgspa.ecommercebg.model.Direccion;
import org.bgspa.ecommercebg.service.DireccionService;
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
@RequestMapping(path="/api/direccion/")
public class DireccionController {
	private final DireccionService direccionService;

	@Autowired 
	public DireccionController(DireccionService direccionService) {
		super();
		this.direccionService = direccionService;
	}//constructor
	
	@GetMapping
	public List<Direccion> getAlldirecciones(){
		return direccionService.getDirecciones();
	}//getAlldir
	
	@GetMapping (path="{dirId}") // http
	public Direccion getDireccion(@PathVariable("dirId")Long id){
		return direccionService.getDireccion(id);
	}//getAlldir
	
	
	@DeleteMapping (path = "{dirId}") // http://localhost:8080/api/productos/1
	public Direccion deleteDireccion(@PathVariable("dirId") Long id) {
		return direccionService.deleteDireccion(id);
	}//getAllProductos
	
	@PostMapping
	public Direccion addDireccion(@RequestBody Direccion direccion) {
		return direccionService.addDireccion(direccion);
	}//addProducto
	
	@PutMapping(path = "{dirId}") // http://localhost:8080/api/productos/1
	public Direccion updateDireccion(@PathVariable("dirId") Long id,
			@RequestParam(required = false) String colonia,
			@RequestParam(required = false) String calle,
			@RequestParam(required = false) String numero,
			@RequestParam(required = false) String codigo_postal,
			@RequestParam(required = false) String estado,
			@RequestParam(required = false) String ciudad){
			return direccionService.updateDireccion(id, colonia, calle, numero, codigo_postal, estado, ciudad);
	}//

	
}//class DireccionController
