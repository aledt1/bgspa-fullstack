package org.bgspa.ecommercebg.service;

import java.util.Optional;

import org.bgspa.ecommercebg.model.Usuarios;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


public interface UsuariosRepository extends JpaRepository<Usuarios, Long>{
	@Query("SELECT u FROM Usuarios u WHERE u.usuario=?1") // JPQL 
	Optional<Usuarios> findByUsuarios(String usuario);

}//interface