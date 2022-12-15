package org.bgspa.ecommercebg.controller;

import java.util.List;

import org.bgspa.ecommercebg.model.Producto;
import org.bgspa.ecommercebg.service.ProductoService;
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
@RequestMapping(path="/api/productos/")
public class ProductoController {
	

		private final ProductoService productoService ;
		
		@Autowired 
		public ProductoController(ProductoService productoService) {
			super();
			this.productoService = productoService;
		}
		
		@GetMapping
		public List<Producto> getAllproductos(){
			return productoService.getProductos();
		}//getAllpro
		
		@GetMapping (path="{prodId}") // http
		public Producto getProducto(@PathVariable("prodId")Long id){
			return productoService.getProducto(id);
		}//getAllpro
		
		
		
		
		@DeleteMapping (path = "{prodId}") // http://localhost:8080/api/productos/1
		public Producto deleteProducto(@PathVariable("prodId") Long id) {
			return productoService.deleteProducto(id);
		}//getAllProductos
		
		@PostMapping
		public Producto addProducto(@RequestBody Producto producto) {
			return productoService.addProducto(producto);
		}//addProducto
		
		@PutMapping(path = "{prodId}") // http://localhost:8080/api/productos/1
		public Producto updateProducto(@PathVariable("prodId") Long id,
				@RequestParam(required = false) String nombre,
				@RequestParam(required = false) String sku,
				@RequestParam(required = false) String descripcion,
				@RequestParam(required = false) Double precio,
				@RequestParam(required = false) String categoria,
				@RequestParam(required = false) String img){
				return productoService.updateProducto(id, nombre, sku, descripcion, precio, categoria, img);
		}//updateProducto
		
		


}//ProductoController
