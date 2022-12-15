package org.bgspa.ecommercebg.service;

import java.util.List;
import java.util.Optional;

import org.bgspa.ecommercebg.model.Usuarios;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsuariosService {
	private final UsuariosRepository usuariosRepository;
	
	@Autowired 
	public UsuariosService(UsuariosRepository usuariosRepository) {
		super();
		this.usuariosRepository = usuariosRepository;
	}
	
	//get lista de usuario
	public List<Usuarios> getUsuarios(){
		return usuariosRepository.findAll();
	}
	
	//getUsuario unico
	public Usuarios getUsuario(Long id) {
		return usuariosRepository.findById(id).orElseThrow(
				() -> new IllegalStateException("El usuario con id" + id +" no existe.")
				);
	}
	// delete usuarios
	public Usuarios deleteUsuarios (Long id) {
		Usuarios tmpUser = null; 
		if (usuariosRepository.existsById(id)) {
			tmpUser = usuariosRepository.findById(id).get();
			usuariosRepository.deleteById(id);
		}
		return tmpUser;	
	}
	
	// add usuario
	public Usuarios addUsuarios(Usuarios usuarios) {
		return usuariosRepository.save(usuarios);
	}
	
	// update usuario
		public Usuarios updateUsuarios(Long id, String nombre, String apellido, String telefono, String contrasena, String newContrasena) {
			Usuarios tmpUser = null;
			if (usuariosRepository.existsById(id)) {
				tmpUser = usuariosRepository.findById(id).get();
				if (nombre != null) tmpUser.setNombre(nombre);
				if (apellido != null) tmpUser.setApellido(apellido);
				if (telefono != null) tmpUser.setTelefono(telefono);
				//--------------------
				if ((contrasena !=null) & (newContrasena!=null)) {
					if(contrasena.equals(tmpUser.getContrasena())) { //si el password es correcto
						tmpUser.setContrasena(newContrasena);
						usuariosRepository.save(tmpUser);
					}// if password.equals
				}//if !=null
				//----------------------
				
				usuariosRepository.save(tmpUser);
			} else {
				System.out.println("Update | El usuario con el id " + " no existe");
			}
			return tmpUser;
		}//updateUsuario
		
		public boolean validaUsuarios(Usuarios usuarios) {
			boolean res = false;
			Optional<Usuarios> userByUsuarios = usuariosRepository.findByUsuarios(usuarios.getUsuario());
			if (userByUsuarios.isPresent()) {
				Usuarios u = userByUsuarios.get();
				if (u.getContrasena().equals(usuarios.getContrasena())) {
					res = true;
				}//if password
			}//if
			return res;
		}//validaUsuarios
	
	
}// class UsuariosService
