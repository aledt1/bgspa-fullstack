package org.bgspa.ecommercebg.service;

import java.util.List;

import org.bgspa.ecommercebg.model.Producto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class ProductoService {
	
	private final ProductoRepository productoRepository;
	
	@Autowired 
	public ProductoService(ProductoRepository productoRepository) {
		super();
		this.productoRepository = productoRepository;
	}//constructor
	
	public List<Producto> getProductos(){
		return productoRepository.findAll();
	}
	
	public Producto getProducto(Long id){
		return productoRepository.findById(id).orElseThrow( 
				()->new IllegalArgumentException("El producto con id" +id +"no existe.")
				);
	}//getProducto
	
	
	
	public Producto deleteProducto (Long id) {
		Producto tmpProd = null;
		if (productoRepository.existsById(id)) {
			tmpProd = productoRepository.findById(id).get();
			productoRepository.deleteById(id);
		}//if exist
		return tmpProd;
	}//deleteProducto

	
	
	public Producto addProducto(Producto producto) {
		return productoRepository.save(producto);
	}//addProducto
	
	public Producto updateProducto(Long id, String nombre, String sku, String descripcion, Double precio, String categoria, String img) {
		Producto tmpProd = null;
		if (productoRepository.existsById(id)) {
			tmpProd = productoRepository.findById(id).get();
			if (nombre!=null) tmpProd.setNombre(nombre);
			if (sku!=null)tmpProd.setSku(sku);
			if (descripcion!=null) tmpProd.setDescripcion(descripcion);
			if (precio!=null) tmpProd.setPrecio(precio.doubleValue());
			if (categoria!=null)tmpProd.setCategoria(categoria);
			if (img!=null) tmpProd.setImg(img);
			productoRepository.save(tmpProd);
		}else {
			System.out.println("Update - El Producto con el id " + id + "no existe.");
		}//else
		return tmpProd;
	}//update
	
	

}// class productoService
