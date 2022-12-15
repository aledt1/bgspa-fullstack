package org.bgspa.ecommercebg.service;

import org.bgspa.ecommercebg.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductoRepository extends JpaRepository<Producto, Long> {

}
